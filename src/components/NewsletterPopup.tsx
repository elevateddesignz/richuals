import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NewsletterPopupProps } from '../types';

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    onClose();
    alert('Thank you for joining the RICH-U-ALS ranks!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-zoom-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center">
          <div className="font-stencil text-2xl font-bold mb-2 text-olive-600">
            RICH-U-ALS
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            JOIN THE ELITE
          </h3>
          <p className="text-gray-600 mb-6">
            Get exclusive access to new tactical gear, limited drops, and survival tips. 
            Plus, receive 10% off your first order.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-olive-600 hover:bg-olive-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              ENLIST NOW
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;