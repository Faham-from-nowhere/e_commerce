import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';
import { Product } from '../types';
import { products as initialProducts } from '../data/products';
import toast from 'react-hot-toast';

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface ShopContextType {
  products: Product[];
  featuredProducts: Product[];
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isProductInCart: (productId: string) => boolean;
  loading: boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const featuredProducts = products.filter(product => product.featured);

  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    setCart(prevCart => [...prevCart, { product, quantity, selectedColor: color, selectedSize: size }]);
    toast.success('Added to cart');
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    toast.success('Removed from cart');
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce((total, item) => {
    const price = item.product.price;
    const discount = item.product.discount || 0;
    const discountedPrice = price - (price * discount / 100);
    return total + (discountedPrice * item.quantity);
  }, 0);

  const isProductInCart = (productId: string) => {
    return cart.some(item => item.product.id === productId);
  };

  return (
    <ShopContext.Provider value={{
      products,
      featuredProducts,
      cart,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      totalItems,
      subtotal,
      isProductInCart,
      loading
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};