import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product";
import PageTransition from "../../components/PageTransition";

export default function CategoryProducts() {
  const { cat } = useParams();
  // console.log(cat);
  const [products, setProducts] = useState([]);

  // ! FETCH PRODUCTS BY CATEGORY
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://dummyjson.com/products/category/${cat}`
      );
      const prds = await data.json();
      setProducts(prds.products);
    };
    getData();
  }, [cat]);
  console.log(products);

  return (
    <>
      <PageTransition key={cat}>
        <div className="container">
          <div className="top_slide">
            <h2 className=" capitalize">
              {cat} : {products.length}
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              praesentium!
            </p>
          </div>

          <div className=" flex flex-wrap items-center justify-between ">
            {products.map((prd, index) => (
              <div className="mx-auto" key={index}>
                <Product item={prd} />
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </>
  );
}
