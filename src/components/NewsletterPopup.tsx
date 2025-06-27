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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
          aria-label="Close popup"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="md:w-1/2 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg"
                  alt="RICH-U-ALS Product"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="font-military text-4xl font-bold text-gray-900 mb-4">
                GET <span className="text-orange-500">10% OFF</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join the RICH-U-ALS community and receive 10% off your first order. 
                Plus exclusive access to new drops and tactical gear updates.
              </p>
            </div>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full py-4 px-6 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-200"
              />
              <button
                onClick={() => {
                  /* handle subscription */
                  onClose();
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 text-lg font-bold rounded-lg transition-colors duration-200"
              >
                CLAIM YOUR DISCOUNT
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              No spam, just tactical excellence. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;