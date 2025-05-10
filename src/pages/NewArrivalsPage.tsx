
import React from 'react';
import { Calendar, ShoppingBag, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const NewArrivalsPage = () => {
  const newArrivals = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "May 1, 2025",
    },
    {
      id: 2,
      title: "Smart Fitness Tracker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2025",
    },
    {
      id: 3,
      title: "Eco-Friendly Water Bottle",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 25, 2025",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Check out our latest products, fresh off the shelves and ready for you to discover. Be the first to experience our newest innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newArrivals.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </div>
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="flex items-center text-slate-500">
                <Calendar className="h-4 w-4 mr-1" /> Added on {item.date}
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

export default NewArrivalsPage;
