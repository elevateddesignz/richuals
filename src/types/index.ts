export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'tees' | 'hoodies' | 'bottoms';
  sizes: string[];
  colors: string[];
  description: string;
  featured?: boolean;
  newArrival?: boolean;
  inStock?: boolean;
  stockCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribeDate: string;
  active: boolean;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
}