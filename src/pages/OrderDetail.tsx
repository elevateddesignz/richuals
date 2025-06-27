import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Package, Truck, MapPin, CreditCard, Calendar, Phone, Mail } from 'lucide-react';
import { useCustomer } from '../context/CustomerContext';

const OrderDetail: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { state, getOrderById } = useCustomer();

  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const order = orderId ? getOrderById(orderId) : null;

  if (!order) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
          <p className="text-gray-600 mb-6">The order you're looking for doesn't exist or you don't have access to it.</p>
          <Link
            to="/account"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Back to Account
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'shipped': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusSteps = () => {
    const steps = [
      { key: 'pending', label: 'Order Placed', icon: Package },
      { key: 'processing', label: 'Processing', icon: Package },
      { key: 'shipped', label: 'Shipped', icon: Truck },
      { key: 'delivered', label: 'Delivered', icon: Package }
    ];

    const statusOrder = ['pending', 'processing', 'shipped', 'delivered'];
    const currentIndex = statusOrder.indexOf(order.status);

    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      current: index === currentIndex
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="font-military text-xl font-bold text-gray-900">
                RICH-U-ALS
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Order Details</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/account"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Account</span>
        </Link>

        {/* Order Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Order #{order.orderNumber}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Placed on {formatDate(order.orderDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CreditCard className="h-4 w-4" />
                  <span>{order.paymentMethod.brand} •••• {order.paymentMethod.last4}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className={`px-4 py-2 text-sm font-semibold rounded-full border ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>

          {/* Order Progress */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Progress</h3>
            <div className="flex items-center justify-between">
              {getStatusSteps().map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.key} className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      step.completed 
                        ? 'bg-orange-500 border-orange-500 text-white' 
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-xs mt-2 text-center ${
                      step.completed ? 'text-orange-500 font-medium' : 'text-gray-400'
                    }`}>
                      {step.label}
                    </span>
                    {index < getStatusSteps().length - 1 && (
                      <div className={`absolute h-0.5 w-full mt-5 ${
                        step.completed ? 'bg-orange-500' : 'bg-gray-300'
                      }`} style={{ left: '50%', width: 'calc(100% - 2.5rem)' }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tracking Information */}
          {order.trackingNumber && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium text-blue-900">Tracking Number: {order.trackingNumber}</p>
                  {order.estimatedDelivery && (
                    <p className="text-sm text-blue-700">
                      Estimated delivery: {formatDate(order.estimatedDelivery)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Order Items</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {order.items.map((item, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.product.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Size: {item.size} • Color: {item.color}
                        </p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">
                          ${item.product.price} each
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary & Addresses */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {order.shipping === 0 ? 'FREE' : `$${order.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${order.tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Shipping Address</span>
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium text-gray-900">
                  {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                </p>
                {order.shippingAddress.company && <p>{order.shippingAddress.company}</p>}
                <p>{order.shippingAddress.street}</p>
                {order.shippingAddress.apartment && <p>{order.shippingAddress.apartment}</p>}
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-600">support@rich-u-als.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;