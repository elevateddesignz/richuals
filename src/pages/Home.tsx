// src/pages/Home.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star, Truck, Shield, Award, Play, ChevronDown } from 'lucide-react';
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

  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/trap.png"
            alt="RICH-U-ALS Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                  TACTICAL EXCELLENCE SINCE 2019
                </div>

                {/* Main Heading */}
                <h1 className="font-military text-6xl lg:text-8xl font-black mb-6 tracking-wider">
                  <span className="text-white">RICH</span>
                  <span className="text-orange-500">-U-</span>
                  <span className="text-white">ALS</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl lg:text-2xl mb-4 text-gray-300 leading-relaxed max-w-2xl font-medium">
                  FORGE YOUR PATH TO
                </p>
                <p className="text-2xl lg:text-3xl mb-8 text-orange-500 font-bold leading-relaxed max-w-2xl">
                  WEALTH • SUCCESS • FULFILLMENT
                </p>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                  Military-grade tactical clothing designed for the modern warrior. 
                  Every thread engineered for excellence, every design built for victory.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link
                    to="/shop"
                    className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10">DEPLOY TO SHOP</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                  
                  <Link
                    to="/about"
                    className="group flex items-center justify-center space-x-2 border-2 border-white/30 text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>OUR STORY</span>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">50K+</div>
                    <div className="text-xs text-gray-300 font-medium uppercase tracking-wide">Warriors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-xs text-gray-300 font-medium uppercase tracking-wide">Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
                    <div className="text-xs text-gray-300 font-medium uppercase tracking-wide">Ready</div>
                  </div>
                </div>
              </div>

              {/* Right side - Let the background image show through */}
              <div className="hidden lg:block">
                {/* Floating Product Info Card */}
                <div className="relative ml-auto max-w-sm">
                  <div className="bg-black/60 backdrop-blur-md text-white p-6 rounded-2xl border border-orange-500/30 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        NEW DROP
                      </div>
                      <div className="text-orange-500 font-bold">★★★★★</div>
                    </div>
                    
                    <h3 className="font-military text-xl font-bold mb-2">TACTICAL TEE COLLECTION</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Premium scorpion logo design on military-grade cotton blend
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-orange-500">$45</span>
                        <span className="text-gray-400 line-through ml-2">$60</span>
                      </div>
                      <Link
                        to="/shop"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-orange-500 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-military text-3xl font-bold mb-4 text-orange-500">
              TACTICAL ADVANTAGES
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every piece of gear is engineered with military precision and tested in real-world conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                <Truck className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-white">RAPID DEPLOYMENT</h3>
              <p className="text-gray-400 leading-relaxed">
                Free tactical shipping on all orders over $75. Mission-critical delivery nationwide in 2-3 days.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                <Shield className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-white">LIFETIME ARMOR</h3>
              <p className="text-gray-400 leading-relaxed">
                Built for the long haul. Every piece comes with our lifetime craftsmanship guarantee.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-all duration-300 border border-orange-500/30">
                <Award className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-military text-xl font-bold mb-4 text-white">ELITE STANDARDS</h3>
              <p className="text-gray-400 leading-relaxed">
                Military-grade materials and construction. No compromises, only excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-military text-4xl font-bold text-gray-900 mb-4">
              MISSION-READY GEAR
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most battle-tested tactical pieces, designed for the modern warrior.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-orange-500 fill-current" />
                <span className="font-semibold text-gray-900">Elite Selection</span>
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
              FULL ARSENAL
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-military text-4xl font-bold text-gray-900 mb-6">
                FORGED IN <span className="text-orange-500">BATTLE</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Born from the battlefield, forged for the streets. RICH-U-ALS bridges the gap 
                between military precision and urban dominance, creating tactical clothing that 
                honors heritage while conquering modern challenges.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every piece is designed with the modern warrior in mind - whether you're 
                navigating urban environments, outdoor adventures, or simply demand clothing 
                that can keep up with your relentless pursuit of excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-orange-500 mb-1">2019</div>
                  <div className="text-sm text-gray-600 font-medium">ESTABLISHED</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-md">
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
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">VETERAN OWNED</div>
                <div className="text-xs text-orange-100">& OPERATED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterPopup isOpen={showNewsletterPopup} onClose={() => setShowNewsletterPopup(false)} />
    </div>
  );
};

export default Home;