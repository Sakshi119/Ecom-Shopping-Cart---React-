🛒 React E-Commerce App (Redux Toolkit + React Router)

A simple and fully functional E-Commerce application built using React, Redux Toolkit, and React Router v6.
This project fetches products from a public API, displays them in a product listing page, shows detailed product pages, and allows users to add/remove items from a shopping cart.



🚀 Features
🛍 Product Pages
Fetch all products from an open-source API (FakeStore API)
Display products in a responsive grid
Navigate to individual product detail pages
View full product information (title, image, price, description)

🛒 Shopping Cart
Add products to cart
Increase & decrease product quantity
Remove products from the cart
Automatically calculate:
Item subtotal
Final cart total
Total quantity
Cart state stored in Redux Toolkit

🔄 Global State Management
Redux Toolkit slices:
productsSlice → all products + single product
cartSlice → cart operations

🧭 Navigation
React Router v6 for all pages:
Home
Products
Product Details
Cart
Includes active link highlighting
Cart count in the navbar


📁 Project Structure
src/
│── api/
│     └── productsAPI.js
│
│── app/
│     └── store.js
│
│── components/
│     └── Navbar.jsx
│     └── ProductCard.jsx
│
│── features/
│     ├── cart/
│     │     └── cartSlice.js
│     └── products/
│           └── productsSlice.js
│
│── pages/
│     ├── Home.jsx
│     ├── Products.jsx
│     ├── ProductDetails.jsx
│     └── CartPage.jsx
│
│── App.js
│── index.js
│── App.css


🔗 API Used

This project uses the Fake Store API:
https://fakestoreapi.com/products
https://fakestoreapi.com/products/:id


🛠 Tech Stack
React 18
Redux Toolkit
React Router v6
JavaScript (ES6+)
FakeStore REST API
CSS / Flexbox /


🧠 Future Enhancements
Product category filtering
Search bar
Wishlist
Login system
Persist cart using localStorage
Dark mode
Checkout page


⭐ Show Your Support
If you like this project:
👉 Star the repo
👉 Follow me on GitHub
