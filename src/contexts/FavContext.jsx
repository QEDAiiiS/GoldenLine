import React, { createContext, useEffect, useState } from "react";

export const favContext = createContext();

//! FUNCTION COMPONENT
export default function FavProvider({ children }) {


  const [favProducts, setFavProducts] = useState(() => {
    const savedFavProducts = localStorage.getItem("favProducts");
    return savedFavProducts ? JSON.parse(savedFavProducts) : [];
  });

  //!  ADD TO FAVORITES
  const addToFav = (item) => {
    setFavProducts((prev) => [...prev, {...item, quantity: 1}])};
//   console.log(favProducts);

  //! SET FAVORITS ITEMS IN LOCAL STORGE
  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
  }, [favProducts]);


//!  DELETE ITEM
const deleteFavPrd = (id)=>{
    setFavProducts(favProducts.filter((i)=> i.id != id))} 



  // ! COMPONENT ELEMENTS
  return (
    <>
      <favContext.Provider value={{ favProducts, addToFav, deleteFavPrd }}>
        {children}
      </favContext.Provider>
      ;
    </>
  );
}
