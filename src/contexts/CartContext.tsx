
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

interface CartContextType {
  cartItems: Product[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        setCartItems(items);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Update totalPrice whenever cart changes
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId: string) => {
    if (!isInCart(productId)) {
      import('../data/products').then(({ products }) => {
        const productToAdd = products.find((product) => product.id === productId);
        if (productToAdd) {
          setCartItems((prev) => [...prev, productToAdd]);
        }
      });
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.id === productId);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isInCart,
    clearCart,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
