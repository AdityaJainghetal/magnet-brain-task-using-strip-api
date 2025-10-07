🛍️ Full Stack E-Commerce Website using React.js, Strapi & Stripe Payment Gateway

A modern full-stack E-Commerce web application built using React.js for the frontend and Strapi as the headless CMS backend.
It allows users to browse products, add them to the cart, and securely complete payments via Stripe Checkout.
The project demonstrates seamless frontend-backend integration and real-time order management.


# Stripe Secret Key (for backend use only)
STRIPE_SECRET_KEY=sk_test_51QWz5HCY7kDIKPcgVNWJpSLxWuKqCQzu1Hm6l9Ejxhj93VhQDCOqA5jSxx2ZyEHbDvlhyZIfuUaWBQsQNAYHFITA00rOxbVnUn

# MongoDB Connection URI
MONGO_URI=mongodb+srv://adityajainghetal_db_user:pqRPaG8e7qbdPyad@cluster0.qu3cgox.mongodb.net/ecommerceDB?retryWrites=true&w=majority&appName=Cluster0

# Client URL (React frontend)
CLIENT_URL=http://localhost:5173



⚡ Key Features

✅ Dynamic Product Display — Fetch products and categories from Strapi API
✅ Shopping Cart — Add, update, or remove items in real-time
✅ Secure Checkout — Integrated with Stripe for real payment processing
✅ Order Confirmation — Dedicated success and failure pages
✅ Reusable Layout & Routing — Using React Router for clean navigation
✅ Scalable Backend — Strapi manages products, categories, and orders with API endpoints



| Layer                 | Technology                                                    |
| --------------------- | ------------------------------------------------------------- |
| **Frontend**          | React.js, React Router DOM, Axios, Tailwind CSS / Vanilla CSS |
| **Backend (CMS)**     | Strapi (Node.js based Headless CMS)                           |
| **Database**          | SQLite (default) or MongoDB (optional)                        |
| **Payment Gateway**   | Stripe API                                                    |
| **API Communication** | REST API (Axios)                                              |
| **Deployment**        | Vercel (Frontend) & Render / Strapi Cloud (Backend)           |



Ecommerce-Project/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Success.jsx
│   │   ├── Failed.jsx
│   │   └── Layout.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── global.css
│
├── package.json
├── .env
└── README.md
