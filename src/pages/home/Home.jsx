import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/header/HeroSlider";
import "./slider.css";
import SlideProduct from "../../components/slideProducts/SlideProd";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import PageTransition from "../../components/PageTransition";



// * ==================  CATEGORIES ARRAY  =================== 
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];



// * ==================  FUNCTION COMPONENT  =================== 
export default function Home() {

// * ==================  MY HOOKS  =================== 
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);




// * ==================  FETCH PRODUCTS WITH THER CATEGORIES  =================== 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (prod) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${prod}`
            );
            const data = await res.json();
            return { [prod]: data.products };
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error Fetching", error);
      }finally{setLoading(false)}
    };
    fetchProducts();
  }, []);
  // console.log(products);




// * ==================  JSX COMPONENT ELEMENTS  =================== 
  return (
    <>
    <PageTransition>

    {/* // * ==================  HEROO  ===================  */}
      <HeroSlider />


    {/* // * ==================  MAP CATEGORIES  ===================  */}
      {loading ? (
        <SlideProductLoading/>
      ) : (

        categories.map((cat) => {
          return <SlideProduct key={cat} data={products[cat]} title={cat.replace("-" , " ")} />;
        })
      )}


    </PageTransition>
    </>
  );
}
