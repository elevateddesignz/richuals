// src/pages/Home.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star, Truck, Shield, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import NewsletterPopup from '../components/NewsletterPopup';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletterPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.filter(p => p.featured);

  const scrollProducts = (direction: 'left' | 'right') => {
    if (featuredRef.current) {
      const scrollAmount = 320;
      featuredRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-military text-5xl lg:text-7xl font-black mb-6 tracking-wider text-gray-900">
                RICH-U-ALS
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-700 leading-relaxed max-w-2xl">
                Every action, habit, and moment of discipline is a step towards
                <span className="text-orange-500 font-semibold"> wealth, success, and fulfillment.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  SHOP COLLECTION
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  OUR STORY
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg"
                  alt="RICH-U-ALS Hero Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                NEW ARRIVAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Truck className="h-8 w-8 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="font-military text-lg font-bold mb-2 text-gray-900">FREE SHIPPING</h3>
              <p className="text-gray-600">Free shipping on all orders over $75. Fast, reliable delivery nationwide.</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Shield className="h-8 w-8 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="font-military text-lg font-bold mb-2 text-gray-900">LIFETIME WARRANTY</h3>
              <p className="text-gray-600">Built to last. Every piece comes with our lifetime craftsmanship guarantee.</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <Award className="h-8 w-8 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="font-military text-lg font-bold mb-2 text-gray-900">PREMIUM QUALITY</h3>
              <p className="text-gray-600">Military-grade materials and construction. Excellence in every detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-military text-4xl font-bold text-gray-900 mb-4">
              FEATURED GEAR
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular tactical-inspired pieces, designed for the modern warrior.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-orange-500 fill-current" />
                <span className="font-semibold text-gray-900">Customer Favorites</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => scrollProducts('left')}
                  className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-orange-500 transition-all duration-200 shadow-sm"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={() => scrollProducts('right')}
                  className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-orange-500 transition-all duration-200 shadow-sm"
                >
                  <ArrowRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div 
              ref={featuredRef} 
              className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredProducts.map(product => (
                <div key={product.id} className="min-w-[300px] flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-military text-4xl font-bold text-gray-900 mb-6">
                BUILT FOR <span className="text-orange-500">EXCELLENCE</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Born from the battlefield, forged for the streets. RICH-U-ALS bridges the gap 
                between military precision and urban style, creating tactical clothing that 
                honors heritage while serving modern needs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every piece is designed with the modern warrior in mind - whether you're 
                navigating urban environments, outdoor adventures, or simply demand clothing 
                that can keep up with your lifestyle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-1">2019</div>
                  <div className="text-sm text-gray-600 font-medium">FOUNDED</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-1">50K+</div>
                  <div className="text-sm text-gray-600 font-medium">WARRIORS EQUIPPED</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8532626/pexels-photo-8532626.jpeg"
                  alt="RICH-U-ALS Brand Story"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-military text-3xl font-bold text-white mb-4">
            JOIN THE RANKS
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive access to new drops, tactical gear updates, and survival tips. 
            Plus, receive 10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-0 focus:outline-none focus:ring-4 focus:ring-orange-300 text-gray-900"
            />
            <button className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-4 px-8 rounded-lg transition-colors duration-200">
              ENLIST NOW
            </button>
          </div>
        </div>
      </section>

      <NewsletterPopup isOpen={showNewsletterPopup} onClose={() => setShowNewsletterPopup(false)} />
    </div>
  );
};

export default Home;