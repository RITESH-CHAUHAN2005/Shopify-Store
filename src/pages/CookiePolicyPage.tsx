
import React from 'react';
import { Cookie, Clock, AlertTriangle } from 'lucide-react';

const CookiePolicyPage = () => {
  const lastUpdated = "May 1, 2025";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Cookie className="h-12 w-12 text-indigo-600" />
        </div>
        
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-slate-600 flex items-center justify-center">
            <Clock className="h-4 w-4 mr-2" /> Last Updated: {lastUpdated}
          </p>
        </div>
        
        <div className="prose max-w-none">
          <p className="lead">
            This Cookie Policy explains what cookies are and how we use them on our website.
            By using our website, you consent to the use of cookies as described in this policy.
          </p>
          
          <h2 className="mt-8">What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
            when you visit a website. Cookies are widely used to make websites work more efficiently and to
            provide information to the website owners.
          </p>
          
          <h2 className="mt-8">How We Use Cookies</h2>
          <p>
            We use cookies for various purposes, including:
          </p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
              They enable core functionality such as security, network management, and account access. You may disable
              these by changing your browser settings, but this will affect how the website functions.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website
              by collecting and reporting information anonymously. This helps us improve the website's structure, content,
              and user experience.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization,
              such as remembering your preferences and settings. They may be set by us or by third-party providers
              whose services we have added to our pages.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver relevant advertisements
              to you based on your interests. They are also used to limit the number of times you see an ad and to
              measure the effectiveness of advertising campaigns.
            </li>
          </ul>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
            <h3 className="flex items-center text-amber-800 font-semibold mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              Third-Party Cookies
            </h3>
            <p className="text-amber-800 mb-0">
              Some pages on our website include content from third-party services (such as social media platforms,
              advertising networks, and analytics providers) which may set their own cookies. We do not have control
              over these cookies, so we encourage you to check the privacy policies of these third parties to learn more
              about their use of cookies.
            </p>
          </div>
          
          <h2 className="mt-8">Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. Here's how to manage cookies
            in common browsers:
          </p>
          <ul>
            <li>
              <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Settings → Site permissions → Cookies and site data
            </li>
          </ul>
          <p>
            Please note that restricting cookies may impact your experience on our website, as some features may not
            function properly.
          </p>
          
          <h2 className="mt-8">Your Consent</h2>
          <p>
            When you first visit our website, a cookie consent banner will appear, giving you the option to accept
            or decline non-essential cookies. By clicking "Accept All Cookies," you consent to the use of all cookies
            as described in this policy. If you choose to decline non-essential cookies, we will only use essential cookies.
          </p>
          <p>
            You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
          </p>
          
          <h2 className="mt-8">Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices.
            Any changes will be posted on this page with an updated "Last Updated" date.
          </p>
          
          <h2 className="mt-8">Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicyPage;
