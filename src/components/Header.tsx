// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, Search, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Hamburger */}
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-700 hover:text-gray-900"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex-1 text-center">
          <Link to="/" className="text-2xl font-bold">
            RICH-U-ALS
          </Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/account" className="p-2 text-gray-700 hover:text-gray-900">
            <User className="h-6 w-6" />
          </Link>
          <Link to="/search" className="p-2 text-gray-700 hover:text-gray-900">
            <Search className="h-6 w-6" />
          </Link>
          <Link to="/cart" className="p-2 text-gray-700 hover:text-gray-900">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
