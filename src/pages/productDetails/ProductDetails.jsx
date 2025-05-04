import React, { useEffect, useState } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import { TiShoppingCart } from "react-icons/ti";
import SlideProduct from "../../components/slideProducts/SlideProd";

export default function ProductDetails() {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loadingCatProd, setLoadingCatProd] = useState(true);

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
  
useEffect(()=>{
    if(!product) return 
    const getCategoryProducts = async ()=>{
           try{

            const res = await fetch(`https://dummyjson.com/products/category/${product.category}`)
            const data = await res.json()
            setCategoryProducts(data)
            setLoadingCatProd(false)
        }catch(error){console.log(error);}
    }

    getCategoryProducts()
},[product])

    console.log(categoryProducts);
    
  const [mainImg, setMainImg] = useState(null);

//   console.log(product);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1>The Product Not Found</h1>;
  return (
    <>
      <div className="item-details">
        <div className="container">
          <div className="imgs-item">


            <div className="main-img">
              <img src={mainImg? mainImg : product.images[0]} alt="" />
            </div>

            <div className="sm-imgs">
              {product.images.map((img) => (
                <img key={img} src={img} alt={product.title} onClick={()=>setMainImg(img)}/>
              ))}
            </div>
          </div>

          <div className="details-item">
            <div className="name">{product.title}</div>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>

            <p className="price">$ {product.price}</p>

            <h5>Availability : {product.availabilityStatus}</h5>
            <h5>
              Brand : <span>{product.brand}</span>
            </h5>
            <p className="desc">{product.description}</p>
            <h5 className="stock">
              Hurry Up Only {product.stock} products ledt in stock
            </h5>

            <button className="btn">
              Add To Cart <TiShoppingCart />
            </button>

            <div className="icons">
              <span>
                <FaRegHeart fill="var(--main_color)" />
              </span>
              <span>
                <FaShare fill="var(--main_color)" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relatedProducts">
        {loadingCatProd? <h1>Loadin Realated Products</h1>:
            <SlideProduct data={categoryProducts.products} title={product.category}/>
        }
      </div>
    </>
  );
}
