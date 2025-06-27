import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Order, NewsletterSubscriber } from '../types';
import { products as initialProducts } from '../data/products';

interface AdminState {
  products: Product[];
  orders: Order[];
  subscribers: NewsletterSubscriber[];
  isAuthenticated: boolean;
  currentUser: { username: string; role: string } | null;
}

interface AdminContextType {
  state: AdminState;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  addSubscriber: (email: string) => void;
  removeSubscriber: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

// Mock data for demonstration
const mockOrders: Order[] = [
  {
    id: '1',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    items: [
      {
        product: initialProducts[0],
        quantity: 2,
        size: 'L',
        color: 'Black'
      }
    ],
    total: 90,
    status: 'pending',
    orderDate: '2025-01-15T10:30:00Z',
    shippingAddress: {
      street: '123 Main St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    }
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    items: [
      {
        product: initialProducts[1],
        quantity: 1,
        size: 'M',
        color: 'Olive'
      }
    ],
    total: 85,
    status: 'shipped',
    orderDate: '2025-01-14T15:45:00Z',
    shippingAddress: {
      street: '456 Oak Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'USA'
    }
  }
];

const mockSubscribers: NewsletterSubscriber[] = [
  {
    id: '1',
    email: 'subscriber1@example.com',
    subscribeDate: '2025-01-10T12:00:00Z',
    active: true
  },
  {
    id: '2',
    email: 'subscriber2@example.com',
    subscribeDate: '2025-01-12T14:30:00Z',
    active: true
  }
];

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AdminState>({
    products: initialProducts,
    orders: mockOrders,
    subscribers: mockSubscribers,
    isAuthenticated: false,
    currentUser: null
  });

  const login = (username: string, password: string): boolean => {
    // Simple authentication - in production, this would be handled by a backend
    if (username === 'admin' && password === 'richuals2025') {
      setState(prev => ({
        ...prev,
        isAuthenticated: true,
        currentUser: { username: 'admin', role: 'admin' }
      }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setState(prev => ({
      ...prev,
      isAuthenticated: false,
      currentUser: null
    }));
  };

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString()
    };
    setState(prev => ({
      ...prev,
      products: [...prev.products, newProduct]
    }));
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setState(prev => ({
      ...prev,
      products: prev.products.map(product =>
        product.id === id ? { ...product, ...updates } : product
      )
    }));
  };

  const deleteProduct = (id: string) => {
    setState(prev => ({
      ...prev,
      products: prev.products.filter(product => product.id !== id)
    }));
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setState(prev => ({
      ...prev,
      orders: prev.orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    }));
  };

  const addSubscriber = (email: string) => {
    const newSubscriber: NewsletterSubscriber = {
      id: Date.now().toString(),
      email,
      subscribeDate: new Date().toISOString(),
      active: true
    };
    setState(prev => ({
      ...prev,
      subscribers: [...prev.subscribers, newSubscriber]
    }));
  };

  const removeSubscriber = (id: string) => {
    setState(prev => ({
      ...prev,
      subscribers: prev.subscribers.filter(sub => sub.id !== id)
    }));
  };

  return (
    <AdminContext.Provider value={{
      state,
      login,
      logout,
      addProduct,
      updateProduct,
      deleteProduct,
      updateOrderStatus,
      addSubscriber,
      removeSubscriber
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};