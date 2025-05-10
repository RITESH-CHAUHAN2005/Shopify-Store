
import React from 'react';
import { Truck, Clock, Globe, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShippingPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shipping Policy</h1>
          <p className="text-lg text-slate-600">
            Everything you need to know about our shipping procedures and policies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>Delivery Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Standard Shipping (3-5 business days)</li>
                <li>Express Shipping (1-2 business days)</li>
                <li>Next Day Delivery (order before 2PM)</li>
                <li>International Shipping (7-14 business days)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>Shipping Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Free standard shipping on orders over $50</li>
                <li>Standard Shipping: $4.99</li>
                <li>Express Shipping: $9.99</li>
                <li>Next Day Delivery: $14.99</li>
                <li>International: Varies by location</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Shipping Process</h2>
          <p className="mb-4">
            All orders are processed and shipped within 1-2 business days after payment confirmation. 
            Orders placed after 2:00 PM EST will be processed the following business day. 
            Once your order ships, you will receive a shipping confirmation email with tracking information.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">International Shipping</h2>
          <p className="mb-4">
            We ship to most countries worldwide. International orders may be subject to import duties and taxes, 
            which are the responsibility of the recipient. Delivery times vary depending on the destination country, 
            customs processing, and local postal service.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Shipping Restrictions</h2>
          <p className="mb-4">
            Some products may have shipping restrictions to certain countries due to local regulations.
            We reserve the right to cancel any order that doesn't comply with shipping regulations or restrictions.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Tracking Your Order</h2>
          <p className="mb-4">
            You can track your order by clicking the tracking number in your shipping confirmation email or 
            by logging into your account on our website. If you have any questions about your shipment, 
            please contact our customer service team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
