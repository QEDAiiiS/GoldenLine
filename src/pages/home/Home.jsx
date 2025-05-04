import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/header/HeroSlider";
import "./slider.css";
import SlideProduct from "../../components/slideProducts/SlideProd";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <HeroSlider />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        categories.map((cat) => {
          return <SlideProduct key={cat} data={products[cat]} title={cat.replace("-" , " ")} />;
        })
      )}
    </>
  );
}
