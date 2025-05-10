
import React from 'react';
import { RotateCcw, Check, X, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReturnsExchangesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-slate-600">
            We want you to be completely satisfied with your purchase. Here's everything you need to know about our return and exchange policy.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-10">
          <div className="bg-indigo-100 p-5 rounded-full">
            <RotateCcw className="h-12 w-12 text-indigo-600" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Eligible for Returns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unopened products in original packaging</li>
                <li>Products with manufacturing defects</li>
                <li>Items that arrived damaged</li>
                <li>Incorrect items received</li>
                <li>Products that don't match description</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <X className="h-5 w-5 text-red-500 mr-2" />
                Not Eligible for Returns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Products used or damaged after delivery</li>
                <li>Personalized or custom-made items</li>
                <li>Digital products</li>
                <li>Gift cards</li>
                <li>Items returned after 30 days</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
          <p className="mb-4">
            To initiate a return or exchange, please follow these steps:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Contact our customer service team within 30 days of receiving your order.</li>
            <li>Fill out the return form that will be sent to you via email.</li>
            <li>Package the item securely in its original packaging if possible.</li>
            <li>Attach the provided return label to your package.</li>
            <li>Drop off the package at the nearest shipping location.</li>
          </ol>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Refund Policy</h2>
          <p className="mb-4">
            Once we receive and inspect your return, you will be notified by email about the approval or rejection of your refund. If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 5-10 business days.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Exchanges</h2>
          <p className="mb-4">
            If you'd like to exchange an item for a different size, color, or product, please indicate this on your return form. Exchanges are subject to product availability. If the requested exchange item is not available, we will issue a refund for the original purchase.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
            <h3 className="flex items-center text-xl font-semibold mb-3">
              <HelpCircle className="h-5 w-5 text-amber-500 mr-2" />
              Need Help?
            </h3>
            <p>
              If you have any questions about our returns and exchanges policy, please don't hesitate to contact our customer service team.
            </p>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsExchangesPage;
