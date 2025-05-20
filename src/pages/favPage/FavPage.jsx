import React, { useContext } from "react";
import { favContext } from "../../contexts/FavContext";
import Product from "../../components/slideProducts/Product";
import PageTransition from "../../components/PageTransition";



// * ==================  FUNCTION COMPONENT  =================== 
export default function FavPage() {

// * ==================  MY HOOKS  =================== 
  const { favProducts } = useContext(favContext);
  console.log(favProducts);



// * ==================  JSX COMPONENT ELEMENTS  =================== 
  return ( 
    <>
      <PageTransition>
        <div className="container">
   
    {/* // * ==================  TOP SECTION  ===================  */}
          <div className="top_slide">
            <h2 className=" capitalize">Your Favourites</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              praesentium!
            </p>
          </div>
    {/* // * ==================  MAP PRODUCTS  ===================  */}
          <div className="fav-products flex flex-wrap gap-6">
            {favProducts.length > 0
              ? favProducts.map((item) => <Product key={item.id} item={item} />)
              : <p className=" text-2xl text-center w-full">You don't add Favorits Products</p>}
          </div>
        </div>
      </PageTransition>
    </>
  );
}
