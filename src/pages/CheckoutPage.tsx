
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check } from 'lucide-react';

const CheckoutPage = () => {
  const { isAuthenticated, user } = useAuth();
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/profile?redirect=checkout');
    }
  }, [isAuthenticated, navigate]);

  // Redirect if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      navigate('/cart');
    }
  }, [cartItems.length, navigate, orderComplete]);

  const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate an order ID
      const newOrderId = generateOrderId();
      setOrderId(newOrderId);
      
      // Show success toast
      toast({
        title: "Order placed successfully!",
        description: `Your order #${newOrderId} has been confirmed`,
        variant: "default"
      });
      
      // Show confirmation dialog
      setOrderComplete(true);
      
      // Clear the cart
      clearCart();
      
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setOrderComplete(false);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Checkout</h1>
        <p className="text-slate-600">Complete your order</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
                    City
                  </label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
                      State
                    </label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-slate-700 mb-1">
                      ZIP Code
                    </label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-700 mb-1">
                    Card Number
                  </label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-slate-700 mb-1">
                    Expiry Date
                  </label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-slate-700 mb-1">
                    CVV
                  </label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                type="button"
                variant="outline"
                onClick={() => navigate('/cart')}
              >
                Back to Cart
              </Button>
              
              <Button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-slate-100 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-slate-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-slate-200 my-4"></div>
            
            <div className="flex justify-between mb-2">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-slate-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            
            <div className="border-t border-slate-200 my-4"></div>
            
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Order Confirmation Dialog */}
      <Dialog open={orderComplete} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Order Confirmed!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Thank you for your order</h2>
            <p className="text-center text-slate-600 mb-4">
              Your order has been confirmed and will be shipped soon.
            </p>
            <div className="bg-slate-50 p-4 rounded-md w-full mb-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Order ID:</span>
                <span className="font-mono">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <Button 
              onClick={handleCloseDialog}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CheckoutPage;
