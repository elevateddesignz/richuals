// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link to={`/product/${product.id}`} className="group block">
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
      <button
        onClick={(e) => {
          e.preventDefault();
          // TODO: dispatch add-to-cart action
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-orange-500 text-black font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </button>
    </div>
    <h3 className="mt-4 text-sm uppercase font-medium text-gray-900 group-hover:text-orange-500">
      {product.name}
    </h3>
    <p className="mt-1 text-sm text-gray-600">${product.price.toFixed(2)}</p>
  </Link>
);

export default ProductCard;
