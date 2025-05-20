import React, { createContext, useEffect, useState } from "react";




// * ==================  CART CONTEXT  =================== 
export const cartContext = createContext();


// * ==================  CART PROVIDER  =================== 
export default function CartProvider({ children }) {



// * ==================  CART ITEMS ARRAY  =================== 
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });


// * ==================  Add TO Cart  =================== 
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, itemQuantity: 1 }]);
  };

// * ==================  Increes Item Quantity  =================== 
  const increesItemQuantity = (id) => {
    setCartItems(prevItems => prevItems.map((i) =>
        i.id == id ? { ...i, itemQuantity: i.itemQuantity + 1 } :  i 
      )
    );
  };

// * ==================  Decrees Item Quantity  =================== 
  const decreesItemQuantity = (id)=>{
    setCartItems((prevItems)=> prevItems.map((i)=> i.id == id &&  i.itemQuantity > 1?
     {...i, itemQuantity: i.itemQuantity - 1} : i))
  }

// * ==================  Delete Product  =================== 
  const deletePrd = (id)=>{
    setCartItems(cartItems.filter((i)=> i.id != id))
  }


// * ==================  SET  CART ITEMS IN LOCAL STORGE  =================== 
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);




// * ==================  PROVIDE CHILDREN  =================== 
  return (
    <cartContext.Provider value={{ cartItems, deletePrd, addToCart, increesItemQuantity, decreesItemQuantity }}>
      {children}
    </cartContext.Provider>
  );  
}
