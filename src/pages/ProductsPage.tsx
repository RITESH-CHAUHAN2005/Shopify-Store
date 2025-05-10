
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  return (
    <div className="relative">
      {/* Enhanced background with blur effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-white opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop Products</h1>
          <p className="text-slate-600 mb-4">Browse our premium collection and save items for later.</p>
          
          {/* Search bar */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-lg font-medium text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
