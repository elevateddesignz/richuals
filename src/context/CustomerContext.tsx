import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '../types';

interface CustomerProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  joinDate: string;
  addresses: CustomerAddress[];
  preferences: {
    newsletter: boolean;
    smsUpdates: boolean;
    emailPromotions: boolean;
  };
}

interface CustomerAddress {
  id: string;
  type: 'shipping' | 'billing';
  isDefault: boolean;
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface CustomerOrder {
  id: string;
  orderNumber: string;
  customerId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  orderDate: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
  shippingAddress: CustomerAddress;
  billingAddress: CustomerAddress;
  paymentMethod: {
    type: 'card' | 'paypal';
    last4?: string;
    brand?: string;
  };
}

interface CustomerState {
  isAuthenticated: boolean;
  customer: CustomerProfile | null;
  orders: CustomerOrder[];
  wishlist: string[];
}

interface CustomerContextType {
  state: CustomerState;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<CustomerProfile>) => void;
  addAddress: (address: Omit<CustomerAddress, 'id'>) => void;
  updateAddress: (id: string, updates: Partial<CustomerAddress>) => void;
  deleteAddress: (id: string) => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  getOrderById: (orderId: string) => CustomerOrder | undefined;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  newsletter?: boolean;
}

const CustomerContext = createContext<CustomerContextType | null>(null);

// Mock data for demonstration
const mockCustomer: CustomerProfile = {
  id: 'cust_1',
  firstName: 'John',
  lastName: 'Warrior',
  email: 'john.warrior@example.com',
  phone: '+1 (555) 123-4567',
  dateOfBirth: '1990-05-15',
  joinDate: '2024-01-15T10:30:00Z',
  addresses: [
    {
      id: 'addr_1',
      type: 'shipping',
      isDefault: true,
      firstName: 'John',
      lastName: 'Warrior',
      street: '123 Tactical Street',
      apartment: 'Unit 4B',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    {
      id: 'addr_2',
      type: 'billing',
      isDefault: true,
      firstName: 'John',
      lastName: 'Warrior',
      street: '123 Tactical Street',
      apartment: 'Unit 4B',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    }
  ],
  preferences: {
    newsletter: true,
    smsUpdates: false,
    emailPromotions: true
  }
};

const mockOrders: CustomerOrder[] = [
  {
    id: 'order_1',
    orderNumber: 'RU-2025-001',
    customerId: 'cust_1',
    items: [
      {
        product: {
          id: '1',
          name: 'RICH-U-ALS Tactical Tee',
          price: 45,
          images: ['https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'],
          category: 'tees',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Black', 'Olive'],
          description: 'Premium tactical tee',
          inStock: true
        },
        quantity: 2,
        size: 'L',
        color: 'Black'
      }
    ],
    subtotal: 90,
    shipping: 0,
    tax: 7.20,
    total: 97.20,
    status: 'shipped',
    orderDate: '2025-01-10T14:30:00Z',
    estimatedDelivery: '2025-01-15T18:00:00Z',
    trackingNumber: 'TRK123456789',
    shippingAddress: mockCustomer.addresses[0],
    billingAddress: mockCustomer.addresses[1],
    paymentMethod: {
      type: 'card',
      last4: '4242',
      brand: 'Visa'
    }
  },
  {
    id: 'order_2',
    orderNumber: 'RU-2025-002',
    customerId: 'cust_1',
    items: [
      {
        product: {
          id: '2',
          name: 'Combat Ready Hoodie',
          price: 85,
          images: ['https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg'],
          category: 'hoodies',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Black', 'Olive'],
          description: 'Heavy-duty hoodie',
          inStock: true
        },
        quantity: 1,
        size: 'M',
        color: 'Olive'
      }
    ],
    subtotal: 85,
    shipping: 9.99,
    tax: 6.80,
    total: 101.79,
    status: 'delivered',
    orderDate: '2024-12-20T10:15:00Z',
    estimatedDelivery: '2024-12-25T18:00:00Z',
    trackingNumber: 'TRK987654321',
    shippingAddress: mockCustomer.addresses[0],
    billingAddress: mockCustomer.addresses[1],
    paymentMethod: {
      type: 'card',
      last4: '4242',
      brand: 'Visa'
    }
  }
];

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CustomerState>({
    isAuthenticated: false,
    customer: null,
    orders: [],
    wishlist: []
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple demo authentication
    if (email === 'john.warrior@example.com' && password === 'warrior123') {
      setState(prev => ({
        ...prev,
        isAuthenticated: true,
        customer: mockCustomer,
        orders: mockOrders,
        wishlist: ['1', '3'] // Mock wishlist
      }));
      return true;
    }
    return false;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newCustomer: CustomerProfile = {
      id: `cust_${Date.now()}`,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      joinDate: new Date().toISOString(),
      addresses: [],
      preferences: {
        newsletter: userData.newsletter || false,
        smsUpdates: false,
        emailPromotions: false
      }
    };

    setState(prev => ({
      ...prev,
      isAuthenticated: true,
      customer: newCustomer,
      orders: [],
      wishlist: []
    }));
    
    return true;
  };

  const logout = () => {
    setState({
      isAuthenticated: false,
      customer: null,
      orders: [],
      wishlist: []
    });
  };

  const updateProfile = (updates: Partial<CustomerProfile>) => {
    setState(prev => ({
      ...prev,
      customer: prev.customer ? { ...prev.customer, ...updates } : null
    }));
  };

  const addAddress = (addressData: Omit<CustomerAddress, 'id'>) => {
    const newAddress: CustomerAddress = {
      ...addressData,
      id: `addr_${Date.now()}`
    };

    setState(prev => ({
      ...prev,
      customer: prev.customer ? {
        ...prev.customer,
        addresses: [...prev.customer.addresses, newAddress]
      } : null
    }));
  };

  const updateAddress = (id: string, updates: Partial<CustomerAddress>) => {
    setState(prev => ({
      ...prev,
      customer: prev.customer ? {
        ...prev.customer,
        addresses: prev.customer.addresses.map(addr =>
          addr.id === id ? { ...addr, ...updates } : addr
        )
      } : null
    }));
  };

  const deleteAddress = (id: string) => {
    setState(prev => ({
      ...prev,
      customer: prev.customer ? {
        ...prev.customer,
        addresses: prev.customer.addresses.filter(addr => addr.id !== id)
      } : null
    }));
  };

  const addToWishlist = (productId: string) => {
    setState(prev => ({
      ...prev,
      wishlist: [...prev.wishlist, productId]
    }));
  };

  const removeFromWishlist = (productId: string) => {
    setState(prev => ({
      ...prev,
      wishlist: prev.wishlist.filter(id => id !== productId)
    }));
  };

  const getOrderById = (orderId: string): CustomerOrder | undefined => {
    return state.orders.find(order => order.id === orderId);
  };

  return (
    <CustomerContext.Provider value={{
      state,
      login,
      register,
      logout,
      updateProfile,
      addAddress,
      updateAddress,
      deleteAddress,
      addToWishlist,
      removeFromWishlist,
      getOrderById
    }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
};