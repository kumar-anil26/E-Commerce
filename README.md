# 🛒 Redux E-Commerce Store

A modern, responsive e-commerce web application built with **React**, **Redux Toolkit**, and **React Router DOM**. 
This project fetches dynamic product data from the DummyJSON API and provides an end-to-end shopping cart flow with real-time price calculations,
taxes, pickup fees, and responsive notifications.

## Live Demo & Features

### Core Functionalities
* **Product Catalog:** Fetches and displays products dynamically with titles, cover images, ratings, and price tags.
* **Global State Management:** Powered by Redux Toolkit for centralized cart state across all routes.
* **Shopping Cart Experience:**
  * View all selected items with individual quantity controllers (increment, decrement, remove).
  * Instant toast feedback using `react-toastify` on cart updates (item added, removed, quantity updated).
* **Order Summary & Price Breakdown:**
  * Dynamic subtotal calculation.
  * Automatic tax computation (e.g., standard sales tax).
  * Pickup / shipping surcharge calculation.
  * Final total bill dynamically updating as items change.
* **Seamless Navigation:** Multi-page client-side routing via React Router DOM with a dedicated "Continue Shopping" button.

---

## Tech Stack

* **Frontend Library:** [React](https://react.dev/) (Hooks, Functional Components)
* **State Management:** [Redux Toolkit (RTK)](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
* **Routing:** [React Router DOM](https://reactrouter.com/) (v6)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)
* **Mock Data API:** [DummyJSON Products API](https://dummyjson.com/products)
* **Styling:** Tailwind CSS && Using Flowbite for component header, footer.

---
