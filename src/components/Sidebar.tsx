import React from 'react';
import { Link } from 'react-router-dom';
import { X, Shield } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => (
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
        
        {/* Admin Section */}
        <Link 
          to="/admin/login" 
          onClick={onClose} 
          className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 bg-gray-50 hover:bg-orange-50 px-3 py-2 rounded-lg"
        >
          <Shield className="h-4 w-4" />
          <span>Admin Login</span>
        </Link>
      </nav>
    </aside>
  </div>
);

export default Sidebar;