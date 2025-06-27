import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCustomer } from '../context/CustomerContext';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { state: cartState } = useCart();
  const { state: customerState } = useCustomer();
  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Hamburger */}
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex-1 text-center">
          <Link to="/" className="font-military text-2xl font-bold text-gray-900 hover:text-orange-500 transition-colors duration-200">
            RICH-U-ALS
          </Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          {/* User Account */}
          <Link 
            to={customerState.isAuthenticated ? "/account" : "/login"}
            className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group"
            title={customerState.isAuthenticated ? "My Account" : "Login"}
          >
            <User className="h-6 w-6" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              {customerState.isAuthenticated ? "My Account" : "Login"}
            </span>
            {customerState.isAuthenticated && (
              <span className="absolute -top-1 -right-1 bg-orange-500 w-2 h-2 rounded-full"></span>
            )}
          </Link>
          
          <button className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200" type="button">
            <Search className="h-6 w-6" />
          </button>
          
          <Link 
            to="/cart" 
            className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Admin Login - Only show if not a customer */}
          {!customerState.isAuthenticated && (
            <Link 
              to="/admin/login"
              className="text-xs text-gray-500 hover:text-orange-500 transition-colors duration-200 ml-2"
              title="Admin"
            >
              Admin
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;