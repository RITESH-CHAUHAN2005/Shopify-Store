# Shopify Wishlist App (Remix + React)

A minimal embedded Shopify app that adds a **“Save for Later / Wishlist”** feature to a Shopify storefront.  
This project demonstrates Shopify app fundamentals using **Remix**, **React**, **Polaris**, and **Tailwind CSS**, with a focus on clean code, simple styling, and session-based wishlist persistence.

## 🛠️ Features

- List products with **Add to Cart** (dummy) and **Save for Later** buttons.
- **Wishlist page** to view all saved products.
- Remove items or move them back to cart (dummy actions).
- Dummy product data (4–8 items) for demonstration.
- **Session cookies** for wishlist persistence.
- Clean, responsive UI styled with **Tailwind CSS**.

## ⚙️ Tech Stack

- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Remix](https://remix.run/)
- [React](https://reactjs.org/)
- [Polaris (Shopify UI Kit)](https://polaris.shopify.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/shopify-wishlist-app.git
cd shopify-wishlist-app


 Project Structure
bash
Copy
Edit
/app
├── routes
│   ├── products.tsx  # Product listing page
│   └── wishlist.tsx  # Wishlist page
├── components
│   └── ProductCard.tsx
├── styles
│   └── global.css
🛠️ Persistence Method
The wishlist is persisted using Remix session cookies, which store product IDs across user sessions securely and efficiently.
As a fallback or alternative (optional), localStorage can also be used for simpler client-side persistence.

🎨 UI Design & Color Palette
This app uses a clean, modern color scheme based on Tailwind CSS:

Primary Accent: Indigo 600 / Indigo 700 (hover)

Secondary: Slate 600 / Slate 100 (backgrounds/text)

Actions: Rose 600 (Remove), Emerald 600 (Move to Cart)

Background: Gray 50 / White (cards)

UI components have soft shadows, rounded corners, smooth hover transitions, and accessible focus rings to ensure a polished and user-friendly experience.

🌱 Future Improvements
Connect to real Shopify store data using Shopify Admin API.

Sync wishlist items to Shopify customer metafields for persistent user accounts.

Add success notifications and polished Polaris modals.

Enhance responsiveness and accessibility.