import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-olive-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-stencil text-xl font-bold tracking-wider text-olive-400">
              RICH-U-ALS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-olive-400 ${
                  isActive(item.href) ? 'text-olive-400' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <Link
              to="/cart"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-olive-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-olive-800/30">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-olive-400 hover:bg-white/5 rounded-lg ${
                    isActive(item.href) ? 'text-olive-400 bg-white/5' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;