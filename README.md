# RICH-U-ALS E-commerce Platform

A premium military-inspired clothing e-commerce platform built with React, TypeScript, and Tailwind CSS, featuring Square payment processing.

## Features

### 🛒 E-commerce Functionality
- Product catalog with categories (Tees, Hoodies, Bottoms)
- Shopping cart with persistent state
- Product detail pages with image galleries
- Size and color selection
- Inventory management

### 💳 Payment Processing
- **Square Payment Integration** for secure credit card processing
- PCI-compliant payment forms
- Real-time payment validation
- Support for all major credit cards
- Sandbox and production environment support

### 👤 User Management
- Customer registration and authentication
- User profiles with order history
- Address management
- Wishlist functionality
- Order tracking

### 🔧 Admin Dashboard
- Product management (add, edit, delete)
- Order management and status updates
- Customer management
- Newsletter subscriber management
- Sales analytics and reporting
- Bulk operations

### 🎨 Design & UX
- Military-inspired tactical design
- Fully responsive layout
- Modern animations and micro-interactions
- Accessible navigation
- SEO-optimized routing

## Square Payment Setup

### 1. Get Square Credentials
1. Sign up for a [Square Developer Account](https://developer.squareup.com/)
2. Create a new application
3. Get your Application ID and Location ID
4. Generate access tokens for sandbox and production

### 2. Configure Square Settings
Update the configuration in `src/utils/squareConfig.ts`:

```typescript
export const SQUARE_CONFIG = {
  applicationId: 'your-actual-app-id-here',
  locationId: 'your-actual-location-id-here',
  environment: 'sandbox', // or 'production'
  sdkUrl: 'https://sandbox.web.squarecdn.com/v1/square.js',
};
```

### 3. Backend Integration
The payment service in `src/services/paymentService.ts` needs to connect to your backend API. Update the `baseUrl` and implement the actual API calls:

```typescript
// Replace mock implementation with real API calls
const response = await fetch(`${this.baseUrl}/payments/process`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  },
  body: JSON.stringify(paymentRequest),
});
```

### 4. Environment Variables
Create a `.env` file with your Square credentials:

```env
REACT_APP_SQUARE_APP_ID=your_square_application_id
REACT_APP_SQUARE_LOCATION_ID=your_square_location_id
REACT_APP_SQUARE_ENVIRONMENT=sandbox
REACT_APP_API_URL=your_backend_api_url
```

## Demo Accounts

### Customer Account
- **Email:** john.warrior@example.com
- **Username:** johnwarrior
- **Password:** warrior123

### Admin Account
- **Email:** admin@rich-u-als.com
- **Username:** admin
- **Password:** richuals2025

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Square credentials (see above)
4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Payments:** Square Web Payments SDK
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom military theme

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
├── data/               # Static data and mock data
├── pages/              # Page components
├── services/           # API services and utilities
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and configs
└── App.tsx             # Main application component
```

## Payment Flow

1. **Cart Review:** Customer reviews items in cart
2. **Shipping Info:** Customer enters shipping details
3. **Payment:** Square payment form collects card details
4. **Tokenization:** Square securely tokenizes card data
5. **Processing:** Token sent to backend for payment processing
6. **Confirmation:** Order confirmation and receipt generation

## Security Features

- PCI-compliant payment processing through Square
- Secure tokenization of payment data
- SSL encryption for all transactions
- No sensitive payment data stored locally
- Input validation and sanitization

## Production Deployment

1. Update Square configuration for production environment
2. Set up backend API for payment processing
3. Configure environment variables
4. Build the application:
   ```bash
   npm run build
   ```
5. Deploy to your hosting platform

## Support

For Square payment integration support, refer to the [Square Developer Documentation](https://developer.squareup.com/docs/web-payments/overview).

For application support, contact the development team.
