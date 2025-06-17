import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
              SALE
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className="p-4">
          <h3 className="font-stencil text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-200">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={color}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {color}
              </span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;