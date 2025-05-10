
import React from 'react';
import { Product } from '../data/products';
import { useWishlist } from '../contexts/WishlistContext';
import { Trash, Check } from 'lucide-react';

interface WishlistItemProps {
  product: Product;
}

const WishlistItem = ({ product }: WishlistItemProps) => {
  const { removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    console.log('Added to cart from wishlist:', product.title);
    // This would normally call an API or dispatch an action
    // Optionally remove from wishlist after adding to cart
    removeFromWishlist(product.id);
  };

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
      
      <div className="flex flex-row sm:flex-col gap-2 mt-2 sm:mt-0">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded font-medium btn-transition flex items-center justify-center gap-1"
        >
          <Check className="h-4 w-4" />
          <span>Move to Cart</span>
        </button>
        
        <button
          onClick={() => removeFromWishlist(product.id)}
          className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded font-medium btn-transition flex items-center justify-center gap-1"
        >
          <Trash className="h-4 w-4" />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
