// src/components/NewsletterPopup.tsx
import React from 'react';
import { X } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-4xl h-full md:h-96 flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Left Image (Shirt Preview) */}
        <div className="hidden md:block md:w-1/2 h-full bg-white flex items-center justify-center">
          <img
            src="/shirt.png"
            alt="Shirt Preview"
            className="object-contain w-full h-full p-4"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-black text-white p-8 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-4xl font-bold uppercase">GET 10% OFF</h2>
            <p className="mt-2 text-lg">
              Claim 10% off your order when you sign up for drop notifications
            </p>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white text-black placeholder-gray-500 py-3 px-4 border-2 border-orange-500 focus:outline-none"
          />
          <button
            onClick={() => {
              /* handle subscription */
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 text-lg font-bold uppercase tracking-wide transition-colors duration-200"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
