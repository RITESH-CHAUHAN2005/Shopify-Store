
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import BestSellersPage from "./pages/BestSellersPage";
import SaleItemsPage from "./pages/SaleItemsPage";
import ShippingPolicyPage from "./pages/ShippingPolicyPage";
import ReturnsExchangesPage from "./pages/ReturnsExchangesPage";
import FaqPage from "./pages/FaqPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";

// Optimized query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    
                    {/* Shop Links */}
                    <Route path="/new-arrivals" element={<NewArrivalsPage />} />
                    <Route path="/best-sellers" element={<BestSellersPage />} />
                    <Route path="/sale-items" element={<SaleItemsPage />} />
                    
                    {/* Customer Service Links */}
                    <Route path="/shipping" element={<ShippingPolicyPage />} />
                    <Route path="/returns" element={<ReturnsExchangesPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    
                    {/* Company Links */}
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/privacy" element={<PrivacyPolicyPage />} />
                    
                    {/* Legal Links */}
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiePolicyPage />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
