
import React from 'react';
import { Shield, Clock, Eye, Lock } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "May 1, 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-12 w-12 text-indigo-600" />
        </div>
        
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-600 flex items-center justify-center">
            <Clock className="h-4 w-4 mr-2" /> Last Updated: {lastUpdated}
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="lead">
            At Shopify Store, we respect your privacy and are committed to protecting your personal data.
            This privacy policy explains how we collect, use, and safeguard your information when you visit
            our website or make a purchase.
          </p>
          
          <h2 className="flex items-center mt-8">
            <Eye className="h-5 w-5 mr-2 text-indigo-600" />
            Information We Collect
          </h2>
          <p>
            We collect several types of information from and about users of our website, including:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> This includes your name, email address, postal address,
              phone number, and payment information when you make a purchase or create an account.
            </li>
            <li>
              <strong>Usage Information:</strong> We collect information about how you interact with our website,
              including the pages you visit, the time you spend on each page, and the links you click.
            </li>
            <li>
              <strong>Device Information:</strong> We collect information about the device you use to access our website,
              including your IP address, browser type, and operating system.
            </li>
          </ul>
          
          <h2 className="flex items-center mt-8">
            <Lock className="h-5 w-5 mr-2 text-indigo-600" />
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>To process and fulfill your orders</li>
            <li>To provide customer support and respond to your inquiries</li>
            <li>To send you transactional emails and order updates</li>
            <li>To improve our website and user experience</li>
            <li>To send you marketing communications (if you've opted in)</li>
            <li>To protect against fraudulent or unauthorized transactions</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="mt-8">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and to hold certain information.
            Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2 className="mt-8">Third-Party Services</h2>
          <p>
            We may use third-party services, such as payment processors, analytics providers, and marketing platforms,
            that collect, use, and share your information according to their own privacy policies.
          </p>
          
          <h2 className="mt-8">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
            storage is 100% secure, so we cannot guarantee absolute security.
          </p>
          
          <h2 className="mt-8">Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to correct or update your personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to the processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2 className="mt-8">Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
          
          <h2 className="mt-8">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Shopify Store</strong><br />
            privacy@shopifystore.com<br />
            123 Main Street<br />
            San Francisco, CA 94105
          </address>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
