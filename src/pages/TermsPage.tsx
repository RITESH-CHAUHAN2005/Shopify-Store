
import React from 'react';
import { FileText, Clock } from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = "May 1, 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <FileText className="h-12 w-12 text-indigo-600" />
        </div>
        
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-600 flex items-center justify-center">
            <Clock className="h-4 w-4 mr-2" /> Last Updated: {lastUpdated}
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="lead">
            These Terms of Service ("Terms") govern your use of the Shopify Store website and services.
            By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms,
            please do not use our website or services.
          </p>
          
          <h2 className="mt-8">1. Use of Our Services</h2>
          <p>
            You must be at least 18 years old to use our services. By using our services, you represent and warrant
            that you are at least 18 years of age and have the legal capacity to enter into these Terms.
          </p>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms.
            You agree not to:
          </p>
          <ul>
            <li>Use our services in any way that violates any applicable law or regulation</li>
            <li>Use our services to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
            <li>Use our services to transmit or distribute malware or other malicious code</li>
            <li>Engage in any activity that could damage, disable, or impair the functioning of our services</li>
          </ul>
          
          <h2 className="mt-8">2. Your Account</h2>
          <p>
            If you create an account with us, you are responsible for maintaining the confidentiality of your account
            information and for all activities that occur under your account. You agree to notify us immediately of any
            unauthorized use of your account or any other breach of security.
          </p>
          
          <h2 className="mt-8">3. Product Information and Pricing</h2>
          <p>
            We strive to provide accurate product information and pricing on our website. However, errors may occur.
            We reserve the right to correct any errors and to change or update information at any time without prior notice.
          </p>
          <p>
            If a product is listed at an incorrect price or with incorrect information, we reserve the right to
            refuse or cancel any orders placed for that product, even if the order has been confirmed and your credit card
            has been charged.
          </p>
          
          <h2 className="mt-8">4. Orders and Payments</h2>
          <p>
            When you place an order through our website, you are offering to purchase a product. We may accept or
            decline your order at our discretion. After you place an order, we will send you an order confirmation
            email. This does not mean that your order has been accepted.
          </p>
          <p>
            Payment for all orders must be made in full at the time of purchase. We accept various payment methods,
            which are displayed on our website during the checkout process.
          </p>
          
          <h2 className="mt-8">5. Shipping and Delivery</h2>
          <p>
            We will make every effort to deliver your order within the estimated timeframe indicated on our website.
            However, delivery times are estimates only and are not guaranteed. We are not responsible for any delays
            caused by shipping carriers or customs processes.
          </p>
          
          <h2 className="mt-8">6. Returns and Refunds</h2>
          <p>
            Our return and refund policy is outlined in our Returns & Exchanges page. By making a purchase from our website,
            you agree to be bound by the terms of this policy.
          </p>
          
          <h2 className="mt-8">7. Intellectual Property</h2>
          <p>
            All content on our website, including text, images, logos, and trademarks, is the property of Shopify Store
            or our content suppliers and is protected by copyright and other intellectual property laws. You may not use,
            reproduce, distribute, or create derivative works from this content without our express written permission.
          </p>
          
          <h2 className="mt-8">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Shopify Store shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or related to your use of our services,
            even if we have been advised of the possibility of such damages.
          </p>
          
          <h2 className="mt-8">9. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will post the revised Terms on our website with
            an updated effective date. Your continued use of our services after any changes to these Terms constitutes
            your acceptance of the revised Terms.
          </p>
          
          <h2 className="mt-8">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Shopify Store</strong><br />
            legal@shopifystore.com<br />
            123 Main Street<br />
            San Francisco, CA 94105
          </address>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
