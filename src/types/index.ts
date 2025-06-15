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