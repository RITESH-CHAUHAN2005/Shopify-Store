
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, products } from '../data/products';

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        const wishlistIds = JSON.parse(savedWishlist) as string[];
        const items = products.filter((product) => wishlistIds.includes(product.id));
        setWishlistItems(items);
      } catch (error) {
        console.error('Error parsing wishlist from localStorage:', error);
        localStorage.removeItem('wishlist');
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    const wishlistIds = wishlistItems.map((item) => item.id);
    localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
  }, [wishlistItems]);

  const addToWishlist = (productId: string) => {
    if (!isInWishlist(productId)) {
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        setWishlistItems((prev) => [...prev, productToAdd]);
      }
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
