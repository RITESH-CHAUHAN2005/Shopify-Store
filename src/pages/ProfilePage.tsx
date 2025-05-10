
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User } from 'lucide-react';

const ProfilePage = () => {
  const { isAuthenticated, user, login, signup, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Check for redirect URL in query params
  const query = new URLSearchParams(location.search);
  const redirectTo = query.get('redirect');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (isLogin) {
        await login(email, password);
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in",
          variant: "default"
        });
      } else {
        await signup(name, email, password);
        toast({
          title: "Account created",
          description: "Your account has been created successfully",
          variant: "default"
        });
      }
      
      // Redirect after successful auth
      if (redirectTo) {
        navigate(`/${redirectTo}`);
      }
      
    } catch (err) {
      toast({
        title: "Authentication failed",
        description: err instanceof Error ? err.message : "An error occurred",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
      variant: "default"
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        {isAuthenticated ? (
          <div className="bg-white rounded-lg shadow-sm p-8 animate-fade-in">
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-indigo-600" />
              </div>
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <p className="text-slate-600">{user?.email}</p>
            </div>
            
            <div className="space-y-4">
              <div className="border-t border-slate-200 pt-4">
                <h2 className="font-semibold mb-2">Account Details</h2>
                <p className="text-sm text-slate-600">Manage your account details and preferences</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4">
                <h2 className="font-semibold mb-2">Order History</h2>
                <p className="text-sm text-slate-600">View your past orders and track current orders</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4">
                <h2 className="font-semibold mb-2">Payment Methods</h2>
                <p className="text-sm text-slate-600">Manage your payment methods</p>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 animate-fade-in">
            <h1 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Login to Your Account' : 'Create an Account'}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  {isLogin 
                    ? "Don't have an account? Sign up" 
                    : "Already have an account? Login"}
                </button>
              </div>
              
              {redirectTo === 'checkout' && (
                <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 rounded-md text-sm">
                  Please log in or sign up to proceed with checkout.
                </div>
              )}
              
              <div className="mt-4 text-center text-xs text-slate-500">
                <p>For demo, use: user@example.com / password</p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
