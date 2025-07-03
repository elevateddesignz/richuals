import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Search, Package, AlertTriangle } from 'lucide-react';

interface NotFoundProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
  backTo?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ 
  title = "Page Not Found", 
  message = "The page you're looking for doesn't exist or has been moved.",
  showBackButton = true,
  backTo = "/"
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(backTo);
    }
  };

  const isComingSoon = title !== "Page Not Found";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {isComingSoon ? (
            <Package className="h-24 w-24 text-orange-500 mx-auto mb-6" />
          ) : (
            <AlertTriangle className="h-24 w-24 text-orange-500 mx-auto mb-6" />
          )}
          
          <h1 className="font-military text-4xl font-bold text-gray-900 mb-4">
            {isComingSoon ? "COMING SOON" : "404"}
          </h1>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {message}
          </p>
        </div>

        <div className="space-y-4">
          {showBackButton && (
            <button
              onClick={handleGoBack}
              className="w-full flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </button>
          )}
          
          <Link
            to="/"
            className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          
          <Link
            to="/shop"
            className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <Search className="h-5 w-5" />
            <span>Browse Products</span>
          </Link>
        </div>

        {!isComingSoon && (
          <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
              <strong>Need help?</strong> Contact our support team at{' '}
              <a href="mailto:support@rich-u-als.com" className="underline hover:no-underline">
                support@rich-u-als.com
              </a>
            </p>
          </div>
        )}

        {isComingSoon && (
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Stay updated!</strong> Follow us for announcements when this feature becomes available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;