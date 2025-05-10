
import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import WishlistItem from '../components/WishlistItem';
import EmptyState from '../components/EmptyState';
import { Heart } from 'lucide-react';

const WishlistPage = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Wishlist</h1>
        <p className="text-slate-600">
          {wishlistItems.length > 0
            ? `You have ${wishlistItems.length} item${wishlistItems.length > 1 ? 's' : ''} saved for later.`
            : 'Your wishlist is empty. Start saving products you love!'}
        </p>
      </div>
      
      {wishlistItems.length > 0 ? (
        <div className="flex flex-col gap-4">
          {wishlistItems.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Your wishlist is empty"
          message="Save items you like while shopping to access them later."
          actionText="Browse Products"
          actionLink="/products"
          icon={<Heart className="h-16 w-16" />}
        />
      )}
    </div>
  );
};

export default WishlistPage;
