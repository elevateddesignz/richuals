// Square Configuration
// Replace these with your actual Square credentials

export const SQUARE_CONFIG = {
  // Sandbox credentials - Replace with production for live site
  applicationId: 'sandbox-sq0idb-your-app-id-here',
  locationId: 'your-location-id-here',
  
  // Environment settings
  environment: 'sandbox', // Change to 'production' for live
  
  // Square Web SDK URL
  sdkUrl: 'https://sandbox.web.squarecdn.com/v1/square.js', // Use https://web.squarecdn.com/v1/square.js for production
};

// Payment processing configuration
export const PAYMENT_CONFIG = {
  currency: 'USD',
  country: 'US',
  
  // Supported card brands
  supportedCardBrands: ['visa', 'mastercard', 'amex', 'discover'],
  
  // Payment form styling
  cardStyle: {
    '.input-container': {
      borderColor: '#d1d5db',
      borderRadius: '8px',
    },
    '.input-container.is-focus': {
      borderColor: '#f97316',
      boxShadow: '0 0 0 2px rgba(249, 115, 22, 0.2)',
    },
    '.input-container.is-error': {
      borderColor: '#ef4444',
    },
    '.message-text': {
      color: '#ef4444',
      fontSize: '14px',
    },
    '.message-icon': {
      color: '#ef4444',
    },
  },
};

// Helper function to format amount for Square (in cents)
export const formatAmountForSquare = (amount: number): number => {
  return Math.round(amount * 100);
};

// Helper function to format amount for display
export const formatAmountForDisplay = (amountInCents: number): string => {
  return (amountInCents / 100).toFixed(2);
};