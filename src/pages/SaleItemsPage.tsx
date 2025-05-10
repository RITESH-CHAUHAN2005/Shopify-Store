
import React from 'react';
import { Percent, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const SaleItemsPage = () => {
  const saleItems = [
    {
      id: 1,
      title: "Bluetooth Speaker",
      originalPrice: 79.99,
      salePrice: 49.99,
      discount: 38,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Leather Notebook",
      originalPrice: 34.99,
      salePrice: 24.99,
      discount: 29,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Smart Watch",
      originalPrice: 199.99,
      salePrice: 149.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Desk Organizer",
      originalPrice: 29.99,
      salePrice: 19.99,
      discount: 33,
      image: "https://images.unsplash.com/photo-1609240873429-8e4ed16826a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sale Items</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Limited time offers on selected items. Don't miss these amazing deals on premium products!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {saleItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-sm font-medium flex items-center">
                <Percent className="h-4 w-4 mr-1" /> {item.discount}% OFF
              </div>
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Limited time offer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-slate-900">${item.salePrice}</p>
                <p className="ml-2 text-slate-500 line-through">${item.originalPrice}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-md flex items-center transition-colors">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to cart
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors">
                Buy now
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SaleItemsPage;
