
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { Heart, User, ShoppingBag } from 'lucide-react';
import CartIcon from './CartIcon';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { wishlistItems } = useWishlist();
  const location = useLocation();

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-300 transition-colors duration-200">
            Shopify Store
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-indigo-300 focus:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li>
                      <Link to="/products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">All Products</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Browse our complete catalog of products
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/new-arrivals" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">New Arrivals</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Check out our latest products
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/best-sellers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Best Sellers</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Our most popular products
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/sale-items" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Sale Items</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Limited time offers and discounts
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-indigo-300 focus:bg-transparent">
                  Customer Service
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Contact Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Get in touch with our support team
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shipping" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Shipping Policy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Learn about our delivery options
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/returns" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Returns & Exchanges</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Our policies for returns and exchanges
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">FAQs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Frequently asked questions
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-indigo-300 focus:bg-transparent">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">About Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Learn about our company and mission
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Read our latest articles and updates
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Careers</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          Join our team and grow with us
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100">
                        <div className="text-sm font-medium leading-none">Privacy Policy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                          How we protect your information
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/wishlist" 
              className="relative flex items-center text-white hover:text-indigo-300 font-medium transition-colors duration-200"
            >
              <Heart className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Wishlist</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-indigo-600 text-white text-xs rounded-full animate-fade-in">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <CartIcon />
            <Link 
              to="/profile" 
              className="flex items-center text-white hover:text-indigo-300 font-medium transition-colors duration-200"
            >
              <User className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
