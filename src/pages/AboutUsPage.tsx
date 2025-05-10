
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Heart } from 'lucide-react';

const AboutUsPage = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sarah Chen",
      role: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Marcus Williams",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Priya Patel",
      role: "Customer Experience",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our products and services.",
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Customer Focus",
      description: "Every decision we make is driven by what's best for our customers.",
      icon: <Users className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Innovation",
      description: "We're constantly exploring new ideas and evolving our offerings.",
      icon: <Clock className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable sourcing.",
      icon: <Heart className="h-8 w-8 text-indigo-600" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h1>
          <p className="text-lg text-slate-600">
            We're on a mission to provide high-quality, innovative products that enhance your everyday life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2020, Shopify Store began as a small venture with a big vision: to create products that combine 
              style, functionality, and sustainability. What started as a passion project in a garage has grown into 
              a beloved brand used by thousands of customers worldwide.
            </p>
            <p className="text-slate-600 mb-4">
              Our founder, Alex Johnson, identified a gap in the market for well-designed, eco-conscious products that 
              don't compromise on quality or aesthetics. With a background in design and a commitment to sustainable 
              practices, Alex set out to build a company that puts both customers and the planet first.
            </p>
            <p className="text-slate-600">
              Today, we're proud to offer a curated selection of products that reflect our core values of quality, 
              innovation, and sustainability. We're constantly evolving our collection based on customer feedback 
              and emerging trends, always with an eye toward creating items that make a positive difference in our 
              customers' lives.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <CardContent className="p-0">
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <div className="bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate people to join our team. Check out our careers page for current openings.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
