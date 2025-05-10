
import React from 'react';
import { Product } from '../data/products';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Heart, Check, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();
  
  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    addToCart(product.id);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
      variant: "default"
    });
  };

  const handleBuyNow = () => {
    if (!inCart) {
      addToCart(product.id);
    }
    // Redirect to checkout
    window.location.href = '/checkout';
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.title} has been removed from your wishlist`,
        variant: "destructive"
      });
    } else {
      addToWishlist(product.id);
      toast({
        title: "Added to wishlist",
        description: `${product.title} has been added to your wishlist`,
        variant: "default"
      });
    }
  };

  return (
    <div className="shopify-card group overflow-hidden">
      <div className="relative aspect-square overflow-hidden rounded-md bg-slate-100 mb-4">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      <h3 className="text-lg font-medium mb-1 truncate">{product.title}</h3>
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
      </div>
      
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      <div className="grid grid-cols-1 gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded font-medium btn-transition flex items-center justify-center"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </button>
          
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded btn-transition ${
              inWishlist 
                ? 'bg-pink-100 text-pink-600 hover:bg-pink-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            aria-label={inWishlist ? 'Remove from Wishlist' : 'Save for Later'}
          >
            {inWishlist ? <Check className="h-5 w-5" /> : <Heart className="h-5 w-5" />}
          </button>
        </div>
        
        <Button 
          onClick={handleBuyNow}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
