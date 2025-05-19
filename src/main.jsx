import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./contexts/CartContext.jsx";
import FavProvider from "./contexts/FavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <CartProvider>
        <FavProvider>
          <App />
        </FavProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
