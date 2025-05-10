
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Orders",
      questions: [
        {
          question: "How do I track my order?",
          answer: "You can track your order by logging into your account and clicking on 'Order History'. There you'll find tracking information for all your recent orders."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or canceled within 1 hour of placing them. After that, please contact our customer service team for assistance."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay."
        }
      ]
    },
    {
      category: "Shipping",
      questions: [
        {
          question: "How long will it take to receive my order?",
          answer: "Standard shipping typically takes 3-5 business days. Express shipping is 1-2 business days. Delivery times may vary based on your location."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days."
        },
        {
          question: "Is shipping free?",
          answer: "We offer free standard shipping on orders over $50. Otherwise, shipping costs vary based on location and shipping method."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 30 days of purchase for unused products in their original packaging. Please see our Returns & Exchanges page for full details."
        },
        {
          question: "How do I initiate a return?",
          answer: "To initiate a return, please contact our customer service team through the 'Contact Us' page or email support@shopifystore.com."
        },
        {
          question: "Are return shipping costs covered?",
          answer: "For defective items or incorrect shipments, return shipping is free. For other returns, customers are responsible for return shipping costs."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          question: "Are your products covered by warranty?",
          answer: "Most products come with a manufacturer's warranty. Warranty details can be found on the product page or in the documentation included with your purchase."
        },
        {
          question: "How can I find product dimensions or specifications?",
          answer: "Detailed product specifications can be found on each product page under the 'Specifications' tab."
        },
        {
          question: "Do you offer product customization?",
          answer: "For select products, we do offer customization options. Products with customization available will have those options listed on the product page."
        }
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  let allQuestions: { question: string; answer: string; category: string }[] = [];
  faqs.forEach(category => {
    category.questions.forEach(q => {
      allQuestions.push({ ...q, category: category.category });
    });
  });

  const filteredQuestions = searchTerm
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">
            Find answers to the most common questions about our products, orders, shipping, and returns.
          </p>
        </div>
        
        <div className="relative mb-10">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <Input
            type="text"
            placeholder="Search our FAQs..."
            className="pl-10 border-slate-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {searchTerm ? (
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                {filteredQuestions.map((q, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div>
                        <span className="text-sm text-indigo-600 font-medium">{q.category}</span>
                        <h3 className="font-medium">{q.question}</h3>
                      </div>
                      {activeIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                        <p className="text-slate-700">{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <HelpCircle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-slate-500">Try different keywords or browse our categories below</p>
              </div>
            )}
          </div>
        ) : (
          <>
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const index = categoryIndex * 10 + faqIndex;
                    return (
                      <div key={faqIndex} className="border border-slate-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50"
                          onClick={() => toggleAccordion(index)}
                        >
                          <h3 className="font-medium">{faq.question}</h3>
                          {activeIndex === index ? (
                            <ChevronUp className="h-5 w-5 text-slate-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-500" />
                          )}
                        </button>
                        {activeIndex === index && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                            <p className="text-slate-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </>
        )}
        
        <div className="mt-12 p-6 bg-indigo-50 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-4">Our customer service team is here to help</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
