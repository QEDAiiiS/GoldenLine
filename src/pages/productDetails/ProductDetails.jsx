import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import SlideProduct from "../../components/slideProducts/SlideProd";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import ImgsProductDetails from "./ImgsProductDetails";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";




// ! FUNCTION COMPONETN
// * ==================  FUNCTION COMPONETN  ===================  
export default function ProductDetails() {


// * ==================  MY HOOKS  ===================  
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loadingCatProd, setLoadingCatProd] = useState(true);



// * ==================  FETCH PRODUCT DATA  ===================  
  useEffect(() => {
    const getProdData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProdData();
  }, [id]);



  
// * ==================  FETCH RELATED PRODUCTS  BY CATEGORY  ===================  
  useEffect(() => {
    if (!product) return;
    const getCategoryProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${product.category}`
        );
        const data = await res.json();
        setCategoryProducts(data);
        setLoadingCatProd(false);
      } catch (error) {
        console.log(error);
      }
    };

    getCategoryProducts();
  }, [product]);
  // console.log(categoryProducts);
  //   console.log(product);


// * ==================  JSX COMPONENT ELEMENTS  ===================  
  if (loading)
    return (
      <div>
        <ProductDetailsLoading />
      </div>
    );

  if (!product) return <h1>The Product Not Found</h1>;

  return (
    <>

    <PageTransition key={id}>


{/* // * ==================  PRODUCT DETAILS  ===================   */}
      {loading ? (
        <ProductDetailsLoading />
      ) : (
        <div className="item-details">
          <div className="container">
{/* // * ==================  IMGS COMPONENT  ===================   */}
            <ImgsProductDetails prd={product} />


{/* // * ==================   IMGS COMPONENT  ===================   */}
            <ProductInfo prd={product} />
          </div>
        </div>
      )}



{/* // * ==================  RELATED PRODUCTS SLIDE  ===================   */}
      <div className="relatedProducts">
        {loadingCatProd ? (
          <SlideProductLoading />
        ) : (
          <SlideProduct
            data={categoryProducts.products}
            title={product.category}
          />
        )}
      </div>
    </PageTransition>
    </>
  );
}
