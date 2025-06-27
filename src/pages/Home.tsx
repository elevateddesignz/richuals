// src/pages/Home.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import NewsletterPopup from '../components/NewsletterPopup';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const newArrivalsRef = useRef<HTMLDivElement>(null);
  const malbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletterPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const newArrivals = products.filter(p => p.newArrival);
  const malbonProducts = products.filter(p => p.category === 'Malbon');

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-110"
          style={{ backgroundImage: 'url(/trap.png)' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-military text-6xl md:text-8xl font-black mb-4 tracking-wider text-orange-500 animate-fade-in">
            RICH-U-ALS
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light tracking-wide leading-relaxed animate-fade-in">
            Every action, habit, and moment of discipline is a step towards
            wealth, success, and fulfillment.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/shop?promo=new-arrivals" className="relative block rounded-lg overflow-hidden">
            <img src="/banners/new-arrivals.jpg" alt="New Arrivals" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold uppercase">New Arrivals</h3>
            </div>
          </Link>
          <Link to="/shop?promo=betty-boop" className="relative block rounded-lg overflow-hidden">
            <img src="/banners/betty-boop.jpg" alt="Betty Boop x Market" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold uppercase">Betty Boop x Market</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          Turning streetwear on its head since 2016.
        </h2>
      </section>

      {/* New Arrivals Slider */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-military font-bold text-orange-500 uppercase">New Arrivals</h3>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  newArrivalsRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
                }
                className="p-2 bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={() =>
                  newArrivalsRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
                }
                className="p-2 bg-gray-100 rounded-full"
              >
                <ArrowRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
          <div ref={newArrivalsRef} className="flex space-x-4 overflow-x-auto pb-2">
            {newArrivals.map(product => (
              <div key={product.id} className="min-w-[250px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Malbon Collection Slider */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-military font-bold text-orange-500 uppercase">Malbon</h3>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  malbonRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
                }
                className="p-2 bg-gray-100 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={() =>
                  malbonRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
                }
                className="p-2 bg-gray-100 rounded-full"
              >
                <ArrowRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
          <div ref={malbonRef} className="flex space-x-4 overflow-x-auto pb-2">
            {malbonProducts.map(product => (
              <div key={product.id} className="min-w-[250px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterPopup isOpen={showNewsletterPopup} onClose={() => setShowNewsletterPopup(false)} />
    </div>
  );
};

export default Home;
