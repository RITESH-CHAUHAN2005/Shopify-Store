
import React from 'react';
import { Star, ShoppingBag, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BestSellersPage = () => {
  const bestSellers = [
    {
      id: 1,
      title: "Ergonomic Keyboard",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      rating: 4.9,
      sales: 1245
    },
    {
      id: 2,
      title: "Designer Coffee Mug",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1577937927133-88e46bc4a030?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      sales: 982
    },
    {
      id: 3,
      title: "Minimalist Desk Lamp",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
      rating: 4.7,
      sales: 864
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Best Sellers</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover our most popular products that customers love. These items have proven their quality and value over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestSellers.map((item, index) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                #{index + 1} Best Seller
              </div>
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="flex items-center">
                <div className="flex items-center mr-4">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>{item.rating}/5</span>
                </div>
                <div className="flex items-center text-slate-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{item.sales.toLocaleString()} sold</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-slate-900">${item.price}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-md flex items-center transition-colors">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to cart
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors">
                Buy now
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestSellersPage;
