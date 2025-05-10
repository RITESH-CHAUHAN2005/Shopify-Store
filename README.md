
# Shopify Wishlist App

A Remix-based embedded Shopify app that adds "Save for Later / Wishlist" functionality to a Shopify storefront.

## Features

- Browse products with "Add to Cart" and "Save for Later" functionality
- Persistent wishlist using localStorage
- Dedicated Wishlist page with "Remove" and "Move to Cart" actions
- Clean, responsive UI designed to match the Shopify aesthetic

## Setup Instructions

1. Clone the repository
2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. The app will be available at `http://localhost:8080`

## Persistence Method

This implementation uses localStorage to persist the wishlist between page reloads. In a production environment, this would ideally:

1. Use Remix session cookies for authenticated users
2. Sync with a database when the user logs in to maintain the wishlist across devices

## Potential Improvements

- **Backend Integration**: Replace the dummy product data with real Shopify API calls
- **User Authentication**: Implement proper authentication and link wishlist items to user accounts
- **Wishlists Sharing**: Add ability to share wishlists via email or social media
- **Multiple Wishlists**: Allow users to create and manage multiple wishlists for different purposes

## Technical Details

- Built with React, TypeScript, and Tailwind CSS
- Uses React Router for navigation
- Employs context API for state management
- Responsive design works on all device sizes
