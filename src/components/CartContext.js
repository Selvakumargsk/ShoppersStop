import React, { createContext, useState } from "react";
import Cart from "./Cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    console.log(cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
