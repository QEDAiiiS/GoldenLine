import React, { createContext, useEffect, useState } from "react";


// * ==================  FAVORITS CONTEXT  =================== 
export const favContext = createContext();

// * ==================  FAVORITS PROVIDER  =================== 
export default function FavProvider({ children }) {


// * ==================  FAVORITS ITEMS ARRAY =================== 
  const [favProducts, setFavProducts] = useState(() => {
    const savedFavProducts = localStorage.getItem("favProducts");
    return savedFavProducts ? JSON.parse(savedFavProducts) : [];
  });

// * ==================  Add TO FAVORITES  =================== 
  const addToFav = (item) => {
    setFavProducts((prev) => [...prev, {...item, quantity: 1}])};
//   console.log(favProducts);



// * ==================  Delete FAVORITS ITEM  =================== 
const deleteFavPrd = (id)=>{
    setFavProducts(favProducts.filter((i)=> i.id != id))} 

// * ==================  SET FAVORITS ITEMS IN LOCAL STORGE  =================== 
  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
  }, [favProducts]);



// * ==================  PROVIDE CHILDREN  =================== 
  return (
    <>
      <favContext.Provider value={{ favProducts, addToFav, deleteFavPrd }}>
        {children}
      </favContext.Provider>
      ;
    </>
  );
}
