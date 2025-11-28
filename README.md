# 🛍️ Nxt Trendz – Complete E-Commerce Web Application

A fully functional **e-commerce shopping experience** built using **React**, with features like product listing, filtering, sorting, search, product details, protected routes, and complete cart functionality.

This project simulates a real online shopping workflow with authentication, Prime badges, exclusive deals, and a detailed cart management experience.

---

## ✨ Features

### 🔐 **Authentication**
- Hard-coded login credentials (provided by mentor)
- Prime & Non-Prime users
- Protected routes → unauthenticated users are redirected to **Login Page**

---

## 🏠 **Core Pages**
- **Login Page**
- **Home Page**
- **Products Listing Page**
- **Product Details Page**
- **Cart Page**
- **Not Found Page**

---

## 🛒 **E-Commerce Features**

### 🛍️ Products Page
- Fetches product data from given APIs (provided in assignment)
- Displays all products with images, title, brand, rating, and price
- **Search** by title
- **Category filter**
- **Rating filter**
- **Sorting** (Price: Low → High, High → Low)
- Responsive UI

### ⭐ Prime Features
- Prime users see **Prime Badges**
- Access to certain Prime-exclusive deals
- Special highlights on products eligible for Prime delivery

### 📄 Product Details Page
- Detailed view of the selected product
- Displays:
  - Image
  - Title, brand, rating
  - Price
  - Description
  - Availability
  - Prime badge (if applicable)
- “Add to Cart” button available directly on this page

---

## 🛒 **Cart Features (Implemented by Me)**

This is the section I developed completely from scratch:

### 🔐 Protected Cart Route
- Only logged-in users can access the cart  
- Otherwise redirected to login

### ➕ Add to Cart
- Adding the same product twice **updates its quantity**  
- No duplicate items appear in the cart list

### 🔢 Update Quantity
- **Increment (+)** increases quantity by 1  
- **Decrement (−)** decreases quantity  
- If quantity becomes 0 → **item is removed**

### ❌ Remove Operations
- Remove individual item  
- Remove all items at once  
- Shows **Empty Cart View** when no items left

### 🧠 Context API Based Cart Management
All cart operations handled using global state:
- `cartList`
- `addCartItem`
- `removeCartItem`
- `incrementCartItemQuantity`
- `decrementCartItemQuantity`
- `removeAllCartItems`

### 💰 Cart Summary
- Total items  
- Total price  
- Price updates dynamically with quantity

---

## 📸 Screenshots

![Login Page](./screenshots/login.png)
![Home Page](./screenshots/Home.png)
![Products Page](./screenshots/products.png)
![ProductDetails Page](./screenshots/product_details.png)
![Cart Page](./screenshots/cart.png)

---

## 🔗 Live Demo
Netlify: https://nxt-trendz-shopping-app.netlify.app

---

## 🧰 Tech Stack

- **React**
- **React Router**
- **Context API**
- **JavaScript (ES6+)**
- **CSS / Custom styling**
- **pnpm / npm**
- ESLint & Prettier setup

---

## 📦 Folder Structure (Optional)

```
src/
  components/
  context/
     CartContext.js
  pages/
     Login/
     Home/
     Products/
     ProductDetails/
     Cart/
  App.js
  index.js
```

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm start
# or
npm start
```

App runs at **http://localhost:3000**.

---

## 🔑 Demo Login Credentials

These were provided in the assignment:

### Prime User  
- **username:** rahul  
- **password:** rahul@2021  

### Non-Prime User  
- **username:** raja  
- **password:** raja@2021  

---

## 🧩 My Contribution

Although this project was built in parts, **I personally implemented the entire Cart Module**, which includes:

- Add / remove / update quantity  
- Context API for global cart state  
- Cart summary calculations  
- Protected route  
- Empty cart & remove-all logic  
- UI behavior & state flow for all cart operations  

This module reflects my understanding of React state management, context, routing, and real-world e-commerce logic.

---

## 🧠 What I Learned

- How real e-commerce cart behavior works
- Managing shared state using **Context API**
- Building protected routes in React Router
- Filtering, sorting, and searching using dynamic API parameters
- Structuring components for maintainability
- Implementing derived values like total cart amount
- Handling edge cases in cart flow (duplicate items, empty cart, etc.)

---
## 🔧 Upcoming Improvements

The next major feature I plan to add is:

- 💳 Payment integration (Razorpay / Stripe)
  - Payment button on Checkout page
  - Order creation
  - Payment success/failure UI

(This feature will be added once my schedule allows.)

## 📝 Notes

This project was completed as part of a guided assignment. The login credentials and product APIs were strictly given, but all cart functionalities were implemented by me.

