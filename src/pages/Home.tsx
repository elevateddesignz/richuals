import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import NewsletterPopup from '../components/NewsletterPopup';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const featuredProducts = products.filter(product => product.featured);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/trap.png)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="font-stencil text-6xl md:text-8xl font-black mb-6 tracking-wider text-orange-500">
              RICH-U-ALS
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
              TACTICAL CLOTHING FOR THE MODERN WARRIOR
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                OUR MISSION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">TACTICAL DURABILITY</h3>
              <p className="text-gray-600">Built to withstand the toughest conditions and missions.</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">RAPID DEPLOYMENT</h3>
              <p className="text-gray-600">Fast, secure shipping to get your gear when you need it.</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-stencil text-xl font-bold mb-2">ELITE QUALITY</h3>
              <p className="text-gray-600">Premium materials and construction for superior performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-stencil text-4xl font-bold mb-4 text-orange-500">
              FEATURED GEAR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular tactical clothing designed for those who demand excellence in every mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/shop"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-stencil text-4xl font-bold mb-6 text-orange-500">
                BUILT FOR BATTLE
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Every piece in our collection is designed with the modern warrior in mind. 
                From urban environments to tactical operations, RICH-U-ALS gear delivers 
                uncompromising performance when it matters most.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Military-grade materials and construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Functional design meets street style</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Tested by professionals in the field</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8532625/pexels-photo-8532625.jpeg"
                alt="RICH-U-ALS Lifestyle"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterPopup 
        isOpen={showNewsletterPopup} 
        onClose={() => setShowNewsletterPopup(false)} 
      />
    </div>
  );
};

export default Home;