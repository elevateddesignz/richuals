import React, { useState } from 'react';
import { User, MapPin, CreditCard, Package, ArrowLeft } from 'lucide-react';
import SquarePaymentForm from './SquarePaymentForm';
import { useCart } from '../context/CartContext';
import { useCustomer } from '../context/CustomerContext';

interface CheckoutFormProps {
  onBack: () => void;
  onSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack, onSuccess }) => {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: customerState } = useCustomer();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: customerState.customer?.firstName || '',
    lastName: customerState.customer?.lastName || '',
    email: customerState.customer?.email || '',
    phone: customerState.customer?.phone || '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const [billingInfo, setBillingInfo] = useState({
    sameAsShipping: true,
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const subtotal = cartState.total;
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSuccess = (result: any) => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      // Clear cart
      cartDispatch({ type: 'CLEAR_CART' });
      
      // Show success message
      alert(`Payment successful! Transaction ID: ${result.transactionId}`);
      
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  const handlePaymentError = (error: string) => {
    alert(`Payment failed: ${error}`);
    setIsProcessing(false);
  };

  const steps = [
    { number: 1, title: 'Shipping', icon: Package },
    { number: 2, title: 'Payment', icon: CreditCard }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  isActive ? 'text-orange-500' : isCompleted ? 'text-green-500' : 'text-gray-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    isActive ? 'border-orange-500 bg-orange-50' : 
                    isCompleted ? 'border-green-500 bg-green-50' : 
                    'border-gray-300 bg-gray-50'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <Package className="h-5 w-5 text-orange-500" />
                <h2 className="text-xl font-semibold text-gray-900">Shipping Information</h2>
              </div>

              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Street address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.apartment}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, apartment: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, state: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, zipCode: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Cart</span>
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <SquarePaymentForm
                amount={total}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
                isLoading={isProcessing}
              />
              
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  disabled={isProcessing}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Shipping</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              {cartState.items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`;
                return (
                  <div key={itemId} className="flex items-center space-x-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{item.product.name}</h4>
                      <p className="text-xs text-gray-600">
                        {item.size} • {item.color} • Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-orange-500">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {subtotal < 75 && (
              <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-sm text-orange-800">
                  Add ${(75 - subtotal).toFixed(2)} more for free shipping!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;