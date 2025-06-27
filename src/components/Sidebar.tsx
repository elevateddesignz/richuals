// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

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
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="p-1">
          <X className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-4">
        <Link to="/" onClick={onClose} className="hover:text-orange-500">Home</Link>
        <Link to="/shop" onClick={onClose} className="hover:text-orange-500">Shop</Link>
        <Link to="/about" onClick={onClose} className="hover:text-orange-500">About</Link>
        <Link to="/contact" onClick={onClose} className="hover:text-orange-500">Contact</Link>
        <Link to="/cart" onClick={onClose} className="hover:text-orange-500">Cart</Link>
      </nav>
    </aside>
  </div>
);

export default Sidebar;
