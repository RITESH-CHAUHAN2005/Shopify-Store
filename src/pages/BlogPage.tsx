
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Minimalist Design in Modern Workspaces",
      excerpt: "Discover how minimalist design principles can transform your workspace into a more productive and calming environment.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "May 5, 2025",
      author: "Sarah Chen",
      readTime: 7,
      tags: ["Design", "Workspace", "Productivity"]
    },
    {
      id: 2,
      title: "How to Choose the Perfect Desk Accessories",
      excerpt: "From desk lamps to organizers, learn how to select accessories that enhance both functionality and aesthetics.",
      image: "https://images.unsplash.com/photo-1476231790875-016a550eaa7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2025",
      author: "Marcus Williams",
      readTime: 5,
      tags: ["Accessories", "Office", "Design"]
    },
    {
      id: 3,
      title: "The Psychology of Color in Product Design",
      excerpt: "Explore how different colors influence mood, productivity, and purchasing decisions.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2025",
      author: "Priya Patel",
      readTime: 8,
      tags: ["Design", "Psychology", "Marketing"]
    },
    {
      id: 4,
      title: "Sustainable Materials in Modern Products",
      excerpt: "A deep dive into eco-friendly materials that don't compromise on quality or aesthetics.",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 7, 2025",
      author: "Alex Johnson",
      readTime: 6,
      tags: ["Sustainability", "Materials", "Eco-friendly"]
    }
  ];
  
  const recentPosts = blogPosts.slice(0, 3);
  
  const filteredPosts = searchTerm
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : blogPosts;

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Insights, tips, and inspiration for creating better workspaces and improving productivity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 border-slate-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} min read
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                      <p className="text-slate-600 mb-4">{post.excerpt}</p>
                      <div className="space-x-2 mb-4">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="bg-slate-100">
                            <Tag className="h-3 w-3 mr-1" /> {tag}
                          </Badge>
                        ))}
                      </div>
                      <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No articles found</h3>
              <p className="text-slate-500">Try different search terms or browse categories</p>
            </div>
          )}
        </div>
        
        <div>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="bg-slate-100 cursor-pointer hover:bg-slate-200 transition-colors"
                    onClick={() => setSearchTerm(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <div key={post.id} className="flex items-start">
                    <div className="h-12 w-12 rounded overflow-hidden mr-3 flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{post.title}</h4>
                      <p className="text-xs text-slate-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <button className="text-indigo-600 font-medium text-sm flex items-center hover:text-indigo-800">
                View All Posts <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
