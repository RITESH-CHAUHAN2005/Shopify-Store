
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <Link 
      to="/cart" 
      className="relative flex items-center text-white hover:text-indigo-300 font-medium transition-colors duration-200"
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      <span className="text-white">Cart</span>
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-indigo-500 text-white text-xs rounded-full animate-fade-in">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
