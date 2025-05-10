
import React from 'react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Trash } from 'lucide-react';

interface CartItemProps {
  product: Product;
}

const CartItem = ({ product }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <div className="shopify-card flex flex-col sm:flex-row gap-4 sm:items-center">
      <div className="relative w-full sm:w-24 h-24 overflow-hidden rounded-md bg-slate-100">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-cover w-full h-full" 
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-1">{product.title}</h3>
        <span className="text-lg font-semibold text-slate-800">${product.price.toFixed(2)}</span>
        <p className="text-slate-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-rose-100 hover:bg-rose-200 text-rose-600 p-2 rounded btn-transition"
          aria-label="Remove from Cart"
        >
          <Trash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
