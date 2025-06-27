import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Order, NewsletterSubscriber } from '../types';
import { products as initialProducts } from '../data/products';

interface AdminState {
  products: Product[];
  orders: Order[];
  subscribers: NewsletterSubscriber[];
  isAuthenticated: boolean;
  currentUser: { email: string; username: string; role: string } | null;
}

interface AdminContextType {
  state: AdminState;
  login: (emailOrUsername: string, password: string) => boolean;
  logout: () => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateProductPrice: (id: string, price: number, originalPrice?: number) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  deleteOrder: (orderId: string) => void;
  addSubscriber: (email: string) => void;
  removeSubscriber: (id: string) => void;
  getOrderById: (orderId: string) => Order | undefined;
  getTotalRevenue: () => number;
  getRevenueByMonth: () => { month: string; revenue: number }[];
  getTopProducts: () => { product: Product; sales: number }[];
  exportOrders: () => void;
  exportSubscribers: () => void;
  sendNewsletter: (subject: string, content: string) => void;
  bulkUpdateOrderStatus: (orderIds: string[], status: Order['status']) => void;
  getOrderStats: () => { total: number; pending: number; processing: number; shipped: number; delivered: number; cancelled: number };
  searchOrders: (query: string) => Order[];
  filterOrdersByDateRange: (startDate: string, endDate: string) => Order[];
}

const AdminContext = createContext<AdminContextType | null>(null);

// Enhanced mock orders with more comprehensive data
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
  },
  {
    id: '3',
    customerName: 'Mike Johnson',
    customerEmail: 'mike@example.com',
    items: [
      {
        product: initialProducts[2],
        quantity: 1,
        size: '32',
        color: 'Black'
      },
      {
        product: initialProducts[0],
        quantity: 1,
        size: 'XL',
        color: 'White'
      }
    ],
    total: 140,
    status: 'delivered',
    orderDate: '2025-01-12T09:20:00Z',
    shippingAddress: {
      street: '789 Pine St',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      country: 'USA'
    }
  },
  {
    id: '4',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah@example.com',
    items: [
      {
        product: initialProducts[3],
        quantity: 3,
        size: 'M',
        color: 'Black'
      }
    ],
    total: 120,
    status: 'processing',
    orderDate: '2025-01-13T14:15:00Z',
    shippingAddress: {
      street: '321 Elm St',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      country: 'USA'
    }
  },
  {
    id: '5',
    customerName: 'David Brown',
    customerEmail: 'david@example.com',
    items: [
      {
        product: initialProducts[4],
        quantity: 1,
        size: 'L',
        color: 'Grey'
      }
    ],
    total: 90,
    status: 'cancelled',
    orderDate: '2025-01-11T11:30:00Z',
    shippingAddress: {
      street: '654 Maple Ave',
      city: 'Denver',
      state: 'CO',
      zipCode: '80201',
      country: 'USA'
    }
  },
  {
    id: '6',
    customerName: 'Emily Davis',
    customerEmail: 'emily@example.com',
    items: [
      {
        product: initialProducts[1],
        quantity: 2,
        size: 'S',
        color: 'Black'
      }
    ],
    total: 170,
    status: 'delivered',
    orderDate: '2025-01-10T16:20:00Z',
    shippingAddress: {
      street: '987 Cedar Ln',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    }
  },
  {
    id: '7',
    customerName: 'Robert Taylor',
    customerEmail: 'robert@example.com',
    items: [
      {
        product: initialProducts[2],
        quantity: 1,
        size: '34',
        color: 'Olive'
      }
    ],
    total: 95,
    status: 'shipped',
    orderDate: '2025-01-09T12:45:00Z',
    shippingAddress: {
      street: '246 Birch St',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201',
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
  },
  {
    id: '3',
    email: 'subscriber3@example.com',
    subscribeDate: '2025-01-08T09:15:00Z',
    active: false
  },
  {
    id: '4',
    email: 'subscriber4@example.com',
    subscribeDate: '2025-01-14T16:45:00Z',
    active: true
  },
  {
    id: '5',
    email: 'warrior@example.com',
    subscribeDate: '2025-01-05T10:20:00Z',
    active: true
  },
  {
    id: '6',
    email: 'tactical@example.com',
    subscribeDate: '2025-01-07T13:30:00Z',
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

  const login = (emailOrUsername: string, password: string): boolean => {
    if ((emailOrUsername === 'admin' || emailOrUsername === 'admin@rich-u-als.com') && password === 'richuals2025') {
      setState(prev => ({
        ...prev,
        isAuthenticated: true,
        currentUser: { 
          email: 'admin@rich-u-als.com', 
          username: 'admin',
          role: 'admin' 
        }
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

  const updateProductPrice = (id: string, price: number, originalPrice?: number) => {
    setState(prev => ({
      ...prev,
      products: prev.products.map(product =>
        product.id === id ? { ...product, price, originalPrice } : product
      )
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

  const bulkUpdateOrderStatus = (orderIds: string[], status: Order['status']) => {
    setState(prev => ({
      ...prev,
      orders: prev.orders.map(order =>
        orderIds.includes(order.id) ? { ...order, status } : order
      )
    }));
  };

  const deleteOrder = (orderId: string) => {
    setState(prev => ({
      ...prev,
      orders: prev.orders.filter(order => order.id !== orderId)
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

  const getOrderById = (orderId: string): Order | undefined => {
    return state.orders.find(order => order.id === orderId);
  };

  const getTotalRevenue = (): number => {
    return state.orders
      .filter(order => order.status !== 'cancelled')
      .reduce((sum, order) => sum + order.total, 0);
  };

  const getRevenueByMonth = (): { month: string; revenue: number }[] => {
    const monthlyRevenue: { [key: string]: number } = {};
    
    state.orders
      .filter(order => order.status !== 'cancelled')
      .forEach(order => {
        const date = new Date(order.orderDate);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        monthlyRevenue[monthKey] = (monthlyRevenue[monthKey] || 0) + order.total;
      });

    return Object.entries(monthlyRevenue).map(([month, revenue]) => ({
      month,
      revenue
    }));
  };

  const getTopProducts = (): { product: Product; sales: number }[] => {
    const productSales: { [key: string]: number } = {};
    
    state.orders
      .filter(order => order.status !== 'cancelled')
      .forEach(order => {
        order.items.forEach(item => {
          productSales[item.product.id] = (productSales[item.product.id] || 0) + item.quantity;
        });
      });

    return Object.entries(productSales)
      .map(([productId, sales]) => ({
        product: state.products.find(p => p.id === productId)!,
        sales
      }))
      .filter(item => item.product)
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 5);
  };

  const getOrderStats = () => {
    const stats = {
      total: state.orders.length,
      pending: 0,
      processing: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0
    };

    state.orders.forEach(order => {
      stats[order.status]++;
    });

    return stats;
  };

  const searchOrders = (query: string): Order[] => {
    const lowercaseQuery = query.toLowerCase();
    return state.orders.filter(order =>
      order.customerName.toLowerCase().includes(lowercaseQuery) ||
      order.customerEmail.toLowerCase().includes(lowercaseQuery) ||
      order.id.includes(lowercaseQuery)
    );
  };

  const filterOrdersByDateRange = (startDate: string, endDate: string): Order[] => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return state.orders.filter(order => {
      const orderDate = new Date(order.orderDate);
      return orderDate >= start && orderDate <= end;
    });
  };

  const exportOrders = () => {
    const csvContent = [
      ['Order ID', 'Customer Name', 'Customer Email', 'Total', 'Status', 'Order Date', 'Items'].join(','),
      ...state.orders.map(order => [
        order.id,
        order.customerName,
        order.customerEmail,
        order.total.toFixed(2),
        order.status,
        new Date(order.orderDate).toLocaleDateString(),
        order.items.map(item => `${item.product.name} (${item.quantity})`).join('; ')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `orders-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const exportSubscribers = () => {
    const csvContent = [
      ['Email', 'Subscribe Date', 'Status'].join(','),
      ...state.subscribers.map(sub => [
        sub.email,
        new Date(sub.subscribeDate).toLocaleDateString(),
        sub.active ? 'Active' : 'Inactive'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `subscribers-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const sendNewsletter = (subject: string, content: string) => {
    const activeSubscribers = state.subscribers.filter(sub => sub.active);
    
    // Simulate sending newsletter
    console.log(`Sending newsletter to ${activeSubscribers.length} subscribers:`);
    console.log(`Subject: ${subject}`);
    console.log(`Content: ${content}`);
    
    // In a real app, this would integrate with an email service
    alert(`Newsletter "${subject}" sent successfully to ${activeSubscribers.length} subscribers!`);
  };

  return (
    <AdminContext.Provider value={{
      state,
      login,
      logout,
      addProduct,
      updateProduct,
      deleteProduct,
      updateProductPrice,
      updateOrderStatus,
      deleteOrder,
      addSubscriber,
      removeSubscriber,
      getOrderById,
      getTotalRevenue,
      getRevenueByMonth,
      getTopProducts,
      exportOrders,
      exportSubscribers,
      sendNewsletter,
      bulkUpdateOrderStatus,
      getOrderStats,
      searchOrders,
      filterOrdersByDateRange
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