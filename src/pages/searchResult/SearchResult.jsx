import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import Product from "../../components/slideProducts/Product";




// * ==================   FUNCTION COMPONENT  =================== 
export default function SearchResult() {
  

// * ==================   MY HOOKS  =================== 
  const query = new URLSearchParams(useLocation().search).get("query");
  // console.log(query);
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setLoading] = useState(true);





// * ==================   GET SEARCH DATA  =================== 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setSearchProducts(data.products || []);
      } catch (error) {
        console.error("Search Error : ", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) getData();
  }, [query]);
  console.log(searchProducts);




  
// * ==================   JSX COMPONENT ELEMENTS  =================== 
  return (
    <PageTransition key={query}>
      <div className="search-products">
        {loading ? (
          <SlideProductLoading key={query}/>
        ) : (
          <div className="container">
            <div className="top_slide">
              <h2 className=" capitalize">
                Results For <span className="text-blue-900">{query}</span>  : {searchProducts.length} item
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, praesentium!
              </p>
            </div>

            <div className=" flex flex-wrap items-center justify-between ">
              {searchProducts.map((prd, index) => (
                <div className="mx-auto" key={index}>
                  <Product item={prd} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
 