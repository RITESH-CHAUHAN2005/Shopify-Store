
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Building, Clock, Users, CheckCircle } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "We're looking for a talented Product Designer to create amazing user experiences for our digital and physical products."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our engineering team to build beautiful, responsive web applications with modern technologies."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Experience",
      location: "New York, NY",
      type: "Full-time",
      description: "Help our customers get the most out of our products through exceptional service and support."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      description: "Create compelling content and campaigns to showcase our products to the world."
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Ensure smooth day-to-day operations across our supply chain and logistics networks."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Flexible Hours",
      description: "Work when you're most productive with our flexible scheduling options."
    },
    {
      icon: <Building className="h-6 w-6 text-indigo-600" />,
      title: "Remote Work",
      description: "Many positions offer fully remote or hybrid working arrangements."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Collaborative Culture",
      description: "Join a supportive team that values creativity and innovation."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-indigo-600" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, retirement plans, and generous PTO policies."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We're looking for talented individuals who are passionate about creating exceptional products and experiences.
        </p>
      </div>
      
      <section className="mb-16">
        <div className="rounded-lg overflow-hidden relative h-80">
          <img 
            src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Our team at work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-white/90 max-w-md">
                At Shopify Store, we're building something special. Our team is small enough that everyone makes an impact,
                but we're growing fast and solving interesting problems every day.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="mb-2">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Open Positions</h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{position.title}</CardTitle>
                    <div className="flex items-center text-slate-500 mt-1">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="mr-4">{position.department}</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="mr-4">{position.location}</span>
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{position.description}</p>
              </CardContent>
              <CardFooter>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition-colors">
                  Apply Now
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
        <Card className="bg-slate-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Don't see a role that fits?</h3>
            <p className="text-slate-600 mb-4 max-w-lg mx-auto">
              We're always on the lookout for talented individuals. Send us your resume and tell us why you'd be a great addition to our team.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors">
              Submit General Application
            </button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CareersPage;
