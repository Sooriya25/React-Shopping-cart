# 🛒 React Shopping Cart App

A fully functional and responsive **Shopping Cart** application built with **React.js**. The app uses **Redux Toolkit** for managing global state, fetches product data from the **Fake Store API**, supports **dynamic cart operations**, and includes a **loader** to enhance user experience during data fetches.

---

## 🔧 Tech Stack

- **React.js** – Front-end library
- **Redux Toolkit** – Simplified global state management
- **React Redux** – React bindings for Redux
- **Axios** – For API requests
- **Fake Store API** – Dummy product data
- **JavaScript (ES6+)**
- **CSS** – Custom/basic styling

---

## ✨ Features

- 📦 **Fetch Products from Fake Store API**
  - Products displayed with image, price, and title
  - API call handled via Axios

- 🛒 **Dynamic Cart Management**
  - Add to Cart / Remove from Cart functionality
  - Quantity adjustment and total price calculation

- 🔄 **Global State with Redux Toolkit**
  - `createSlice()` used to manage product and cart states
  - Clean separation of concerns with reducers and actions

- ⏳ **Loader**
  - Loading spinner shown while data is being fetched

- 📱 **Responsive UI**
  - Works well on both desktop and mobile using custom CSS