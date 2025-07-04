import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { SQUARE_CONFIG, PAYMENT_CONFIG, formatAmountForSquare } from '../utils/squareConfig';
import { paymentService, PaymentRequest } from '../services/paymentService';

interface SquarePaymentFormProps {
  amount: number;
  onPaymentSuccess: (result: any) => void;
  onPaymentError: (error: string) => void;
  isLoading?: boolean;
}

declare global {
  interface Window {
    Square: any;
  }
}

const SquarePaymentForm: React.FC<SquarePaymentFormProps> = ({
  amount,
  onPaymentSuccess,
  onPaymentError,
  isLoading = false
}) => {
  const [payments, setPayments] = useState<any>(null);
  const [card, setCard] = useState<any>(null);
  const [isSquareLoaded, setIsSquareLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Square Sandbox Application ID - Replace with your actual Application ID
  const SQUARE_APPLICATION_ID = SQUARE_CONFIG.applicationId;
  const SQUARE_LOCATION_ID = SQUARE_CONFIG.locationId;

  useEffect(() => {
    const initializeSquare = async () => {
      if (!window.Square) {
        // Load Square SDK
        const script = document.createElement('script');
        script.src = SQUARE_CONFIG.sdkUrl;
        script.async = true;
        script.onload = () => {
          setIsSquareLoaded(true);
          initPayments();
        };
        script.onerror = () => {
          onPaymentError('Failed to load Square payment system');
        };
        document.head.appendChild(script);
      } else {
        setIsSquareLoaded(true);
        initPayments();
      }
    };

    const initPayments = async () => {
      try {
        const paymentsInstance = window.Square.payments(SQUARE_APPLICATION_ID, SQUARE_LOCATION_ID);
        setPayments(paymentsInstance);

        const cardInstance = await paymentsInstance.card({
          style: PAYMENT_CONFIG.cardStyle
        });
        await cardInstance.attach(cardContainerRef.current);
        setCard(cardInstance);
      } catch (error) {
        console.error('Square initialization error:', error);
        onPaymentError('Failed to initialize payment system');
      }
    };

    initializeSquare();

    return () => {
      if (card) {
        card.destroy();
      }
    };
  }, []);

  const handlePayment = async () => {
    if (!card || !payments) {
      onPaymentError('Payment system not ready');
      return;
    }

    setIsProcessing(true);
    setErrors([]);

    try {
      const result = await card.tokenize();
      
      if (result.status === 'OK') {
        // Send token to your backend for processing
        const paymentRequest: PaymentRequest = {
          token: result.token,
          amount: formatAmountForSquare(amount),
          currency: PAYMENT_CONFIG.currency,
          orderId: `order_${Date.now()}`,
        };
        
        const paymentResult = await paymentService.processPayment(paymentRequest);
        
        if (paymentResult.success) {
          onPaymentSuccess(paymentResult);
        } else {
          onPaymentError(paymentResult.error || 'Payment failed');
        }
      } else {
        const errorMessages = result.errors?.map((error: any) => error.message) || ['Payment failed'];
        setErrors(errorMessages);
        onPaymentError(errorMessages.join(', '));
      }
    } catch (error) {
      console.error('Payment error:', error);
      onPaymentError('Payment processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isSquareLoaded) {
    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
          <span className="text-gray-600">Loading secure payment...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Lock className="h-5 w-5 text-green-500" />
        <span className="font-semibold text-gray-900">Secure Payment</span>
        <span className="text-sm text-gray-500">Powered by Square</span>
      </div>

      {errors.length > 0 && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-red-800">Payment Error</span>
          </div>
          <ul className="text-sm text-red-700 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Information
        </label>
        <div 
          ref={cardContainerRef}
          className="border border-gray-300 rounded-lg p-3 min-h-[60px] bg-white"
          style={{ minHeight: '60px' }}
        />
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total:</span>
          <span className="text-orange-500">${amount.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={isProcessing || isLoading || !card}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Processing Payment...</span>
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5" />
            <span>Complete Payment</span>
          </>
        )}
      </button>

      <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Lock className="h-3 w-3" />
          <span>SSL Encrypted</span>
        </div>
        <span>•</span>
        <span>PCI Compliant</span>
        <span>•</span>
        <span>Square Secure</span>
      </div>

      <div className="mt-2 text-center">
        <p className="text-xs text-gray-500">
          Your payment information is encrypted and secure
        </p>
      </div>
    </div>
  );
};

export default SquarePaymentForm;