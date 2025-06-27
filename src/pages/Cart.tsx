import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleCheckout = () => {
    // Integrate with Stripe here
    alert('Checkout functionality would integrate with Stripe here');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="font-stencil text-2xl font-bold text-gray-900 mb-4">
            YOUR CART IS EMPTY
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to gear up? Browse our tactical collection.
          </p>
          <Link
            to="/shop"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            START SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-stencil text-3xl font-bold text-gray-900">
              SHOPPING CART
            </h1>
            <p className="text-gray-600">
              {state.items.reduce((sum, item) => sum + item.quantity, 0)} item(s) in your cart
            </p>
          </div>
          <Link
            to="/shop"
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              {state.items.map((item) => {
                const itemId = `${item.product.id}-${item.size}-${item.color}`;
                return (
                  <div key={itemId} className="p-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Size: {item.size} | Color: {item.color}
                        </p>
                        <p className="font-bold text-orange-500">
                          ${item.product.price}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(itemId, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(itemId, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-gray-900 mb-2">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(itemId)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-gray-100">
              <h2 className="font-stencil text-xl font-bold text-gray-900 mb-4">
                ORDER SUMMARY
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {state.total >= 75 ? 'FREE' : '$9.99'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">
                    ${(state.total * 0.08).toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg">
                      ${(state.total + (state.total >= 75 ? 0 : 9.99) + state.total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {state.total < 75 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-orange-800">
                    Add ${(75 - state.total).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
              >
                PROCEED TO CHECKOUT
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;