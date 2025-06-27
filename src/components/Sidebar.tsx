import React from 'react';
import { Link } from 'react-router-dom';
import { X, Shield, User, Package, Heart } from 'lucide-react';
import { useCustomer } from '../context/CustomerContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { state: customerState, logout } = useCustomer();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* drawer panel */}
      <aside
        className={`absolute inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-military text-xl font-bold text-gray-900">MENU</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            to="/" 
            onClick={onClose} 
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            onClick={onClose} 
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            onClick={onClose} 
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={onClose} 
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            onClick={onClose} 
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
          >
            Cart
          </Link>
          
          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>
          
          {/* Customer Account Section */}
          {customerState.isAuthenticated ? (
            <>
              <div className="bg-orange-50 rounded-lg p-3 mb-2">
                <p className="text-sm font-medium text-gray-900">
                  Welcome, {customerState.customer?.firstName}!
                </p>
                <p className="text-xs text-gray-600">Elite Member</p>
              </div>
              
              <Link 
                to="/account" 
                onClick={onClose} 
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 bg-gray-50 hover:bg-orange-50 px-3 py-2 rounded-lg"
              >
                <User className="h-4 w-4" />
                <span>My Account</span>
              </Link>
              
              <Link 
                to="/account?tab=orders" 
                onClick={onClose} 
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-lg"
              >
                <Package className="h-4 w-4" />
                <span>My Orders</span>
              </Link>
              
              <Link 
                to="/account?tab=wishlist" 
                onClick={onClose} 
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-lg"
              >
                <Heart className="h-4 w-4" />
                <span>Wishlist</span>
              </Link>
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 font-medium transition-colors duration-200 px-3 py-2 rounded-lg text-left w-full"
              >
                <X className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              onClick={onClose} 
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 bg-gray-50 hover:bg-orange-50 px-3 py-2 rounded-lg"
            >
              <User className="h-4 w-4" />
              <span>Login / Register</span>
            </Link>
          )}
          
          {/* Admin Section */}
          <div className="border-t border-gray-200 my-4"></div>
          <Link 
            to="/login" 
            onClick={onClose} 
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 bg-gray-50 hover:bg-orange-50 px-3 py-2 rounded-lg"
          >
            <Shield className="h-4 w-4" />
            <span>Admin Portal</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;