
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Shopify Notebook",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2t8ZW58MHx8MHx8fDA%3D",
    description: "A premium notebook with Shopify branding. Perfect for taking notes during meetings or brainstorming sessions."
  },
  {
    id: "2",
    title: "Minimalist Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
    description: "A sleek, modern desk lamp with adjustable brightness. Provides perfect lighting for late night coding sessions."
  },
  {
    id: "3",
    title: "Ergonomic Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    description: "An ergonomic keyboard designed to reduce strain during long hours of typing. Wireless with backlit keys."
  },
  {
    id: "4",
    title: "Productivity Timer",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A pomodoro timer to boost your productivity. Simple interface with customizable time intervals."
  },
  {
    id: "5",
    title: "Shopify Water Bottle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    description: "A reusable water bottle with Shopify branding. Keeps your water cold for hours so you can stay hydrated."
  },
  {
    id: "6",
    title: "Designer Coffee Mug",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A stylish coffee mug for designers. Double-walled insulation keeps your coffee hot longer."
  }
];
