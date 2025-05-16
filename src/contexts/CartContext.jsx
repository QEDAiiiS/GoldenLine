import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {


  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, itemQuantity: 1 }]);
  };

  //TODO Increes Item Quantity
  const increesItemQuantity = (id) => {
    setCartItems(prevItems => prevItems.map((i) =>
        i.id == id ? { ...i, itemQuantity: i.itemQuantity + 1 } :  i 
      )
    );
  };

  //TODO Decrees Item Quantity 
  const decreesItemQuantity = (id)=>{
    setCartItems((prevItems)=> prevItems.map((i)=> i.id == id &&  i.itemQuantity > 1?
     {...i, itemQuantity: i.itemQuantity - 1} : i))
  }

  //TODO Delete Product
  const deletePrd = (id)=>{
    setCartItems(cartItems.filter((i)=> i.id != id))
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);





  return (
    <cartContext.Provider value={{ cartItems, deletePrd, addToCart, increesItemQuantity, decreesItemQuantity }}>
      {children}
    </cartContext.Provider>
  );  
}
