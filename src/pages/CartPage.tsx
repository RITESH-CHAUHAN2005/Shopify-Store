
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import CartItem from '../components/CartItem';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CartPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/profile?redirect=checkout');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
        <p className="text-slate-600">
          {cartItems.length > 0
            ? `You have ${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart.`
            : 'Your cart is empty.'}
        </p>
      </div>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span className="text-slate-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              
              <div className="border-t border-slate-200 my-4"></div>
              
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => navigate('/products')}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
                
                <Button 
                  variant="ghost"
                  onClick={() => clearCart()}
                  className="w-full text-slate-600 hover:text-rose-600"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          title="Your cart is empty"
          message="Looks like you haven't added any products to your cart yet."
          actionText="Start Shopping"
          actionLink="/products"
          icon={<ShoppingCart className="h-16 w-16" />}
        />
      )}
    </div>
  );
};

export default CartPage;
