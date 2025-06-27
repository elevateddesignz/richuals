import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  Settings, 
  LogOut,
  Edit3,
  Plus,
  Truck,
  Calendar,
  CreditCard,
  Phone,
  Mail,
  Shield
} from 'lucide-react';
import { useCustomer } from '../context/CustomerContext';

const CustomerAccount: React.FC = () => {
  const { state, logout } = useCustomer();
  const [activeTab, setActiveTab] = useState('overview');

  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const customer = state.customer!;
  const recentOrders = state.orders.slice(0, 3);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="font-military text-xl font-bold text-gray-900">
                RICH-U-ALS
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">My Account</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {customer.firstName}</span>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.firstName} {customer.lastName}</h3>
                  <p className="text-sm text-gray-600">Elite Member</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: User },
                  { id: 'orders', label: 'Orders', icon: Package },
                  { id: 'addresses', label: 'Addresses', icon: MapPin },
                  { id: 'wishlist', label: 'Wishlist', icon: Heart },
                  { id: 'profile', label: 'Profile', icon: Settings }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === id
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Welcome back, {customer.firstName}!</h2>
                  <p className="text-orange-100">
                    Ready for your next tactical mission? Check out our latest gear and track your orders.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900">{state.orders.length}</p>
                      </div>
                      <Package className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Wishlist Items</p>
                        <p className="text-2xl font-bold text-gray-900">{state.wishlist.length}</p>
                      </div>
                      <Heart className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Member Since</p>
                        <p className="text-2xl font-bold text-gray-900">{formatDate(customer.joinDate)}</p>
                      </div>
                      <Shield className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-md">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                      <button
                        onClick={() => setActiveTab('orders')}
                        className="text-orange-500 hover:text-orange-600 font-medium"
                      >
                        View All
                      </button>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-semibold text-gray-900">Order #{order.orderNumber}</p>
                            <p className="text-sm text-gray-600">{formatDate(order.orderDate)}</p>
                          </div>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">
                            {order.items.length} item(s) • ${order.total.toFixed(2)}
                          </p>
                          <Link
                            to={`/account/orders/${order.id}`}
                            className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {state.orders.map((order) => (
                    <div key={order.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Order #{order.orderNumber}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(order.orderDate)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <CreditCard className="h-4 w-4" />
                              <span>{order.paymentMethod.brand} •••• {order.paymentMethod.last4}</span>
                            </div>
                            {order.trackingNumber && (
                              <div className="flex items-center space-x-1">
                                <Truck className="h-4 w-4" />
                                <span>{order.trackingNumber}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>

                      <div className="space-y-3 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-900">{item.product.name}</h5>
                              <p className="text-sm text-gray-600">
                                Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-semibold text-gray-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <p className="font-semibold text-gray-900">
                          Total: ${order.total.toFixed(2)}
                        </p>
                        <div className="flex space-x-3">
                          <Link
                            to={`/account/orders/${order.id}`}
                            className="text-orange-500 hover:text-orange-600 font-medium"
                          >
                            View Details
                          </Link>
                          {order.status === 'delivered' && (
                            <button className="text-gray-600 hover:text-gray-900 font-medium">
                              Reorder
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600">
                      <Edit3 className="h-4 w-4" />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <p className="text-gray-900">{customer.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <p className="text-gray-900">{customer.lastName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-900">{customer.email}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p className="text-gray-900">{customer.phone || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Communication Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Newsletter</h4>
                        <p className="text-sm text-gray-600">Receive tactical updates and new product announcements</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={customer.preferences.newsletter}
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        readOnly
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">SMS Updates</h4>
                        <p className="text-sm text-gray-600">Get order updates and shipping notifications via text</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={customer.preferences.smsUpdates}
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        readOnly
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Email Promotions</h4>
                        <p className="text-sm text-gray-600">Receive exclusive offers and promotional emails</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={customer.preferences.emailPromotions}
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Saved Addresses</h3>
                    <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      <Plus className="h-4 w-4" />
                      <span>Add Address</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {customer.addresses.map((address) => (
                      <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900 capitalize">{address.type} Address</h4>
                            {address.isDefault && (
                              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mt-1">
                                Default
                              </span>
                            )}
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Edit3 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>{address.firstName} {address.lastName}</p>
                          {address.company && <p>{address.company}</p>}
                          <p>{address.street}</p>
                          {address.apartment && <p>{address.apartment}</p>}
                          <p>{address.city}, {address.state} {address.zipCode}</p>
                          <p>{address.country}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">My Wishlist</h3>
                </div>
                <div className="p-6">
                  {state.wishlist.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h4>
                      <p className="text-gray-600 mb-6">Save items you love to buy them later</p>
                      <Link
                        to="/shop"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Wishlist items would be rendered here */}
                      <p className="text-gray-600">Wishlist items coming soon...</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;