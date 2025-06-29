import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="font-military text-2xl font-bold tracking-wider text-gray-900">
                RICH-U-ALS
              </div>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Premium military-inspired clothing for the modern warrior. Built for those who demand excellence in every mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-military text-lg font-bold mb-4 text-gray-900">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Shop All</Link></li>
              <li><Link to="/shop?category=tees" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Tees</Link></li>
              <li><Link to="/shop?category=hoodies" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Hoodies</Link></li>
              <li><Link to="/shop?category=bottoms" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">Bottoms</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-military text-lg font-bold mb-4 text-gray-900">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>support@rich-u-als.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 RICH-U-ALS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/returns" className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;