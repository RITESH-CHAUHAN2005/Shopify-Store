
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Gift } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">NEW FEATURE</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
          Welcome to Shopify Wishlist
        </h1>
        
        <p className="text-xl text-slate-600 mb-6">
          Save your favorite products for later with our seamless wishlist experience.
          Never lose track of items you love again.
        </p>
        
        <div className="mb-8 text-slate-600">
          <p className="mb-4">Join thousands of shoppers who have already discovered their perfect items.</p>
          <div className="flex justify-center gap-2">
            <span className="inline-flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1"></span>
              Free shipping
            </span>
            <span className="inline-flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1"></span>
              Easy returns
            </span>
            <span className="inline-flex items-center px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1"></span>
              Secure checkout
            </span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium text-lg btn-transition"
          >
            <ShoppingCart className="inline-block mr-2 h-5 w-5" />
            Browse Products
          </Link>
          
          <Link
            to="/wishlist"
            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium text-lg btn-transition"
          >
            <Heart className="inline-block mr-2 h-5 w-5" />
            View Wishlist
          </Link>
        </div>
        
        <div className="mt-16 bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-semibold mb-2">Browse Products</h3>
              <p className="text-slate-600">Explore our curated selection of premium products with high-quality images and detailed descriptions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-semibold mb-2">Save For Later</h3>
              <p className="text-slate-600">Click the heart icon to save items to your wishlist. Your selections are stored securely for future shopping.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-semibold mb-2">Manage Your List</h3>
              <p className="text-slate-600">Review your saved items and move them to cart when ready. Purchase with confidence using our secure checkout.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-indigo-50 rounded-xl">
          <div className="flex items-center justify-center mb-4">
            <Gift className="h-8 w-8 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-semibold text-slate-800">Special Offer</h2>
          </div>
          <p className="text-lg mb-4">Sign up today and get <span className="font-bold text-indigo-600">15% off</span> your first purchase!</p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium btn-transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
