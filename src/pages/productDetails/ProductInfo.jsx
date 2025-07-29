import React, { useContext } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { favContext } from "../../contexts/FavContext";





// * ==================  FUNCTION COMPONENT  =================== 
export default function ProductInfo({ prd }) {

// * ==================  MY HOOKS  =================== 
  const { cartItems, addToCart } = useContext(cartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((i) => i.id === prd.id);
  const { favProducts, addToFav, deleteFavPrd } = useContext(favContext);



// * ==================  HANDLE ADD TO CART  =================== 
  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} />

        <div className="toast-content">
          <h4>{item.title}</h4>
          <p>add to Cart</p>
          <button className="btn" onClick={() => navigate("/cart")}>
            View Cart
          </button>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

// * ==================   HANDLE ADD TO FAVORITES  =================== 
    const isInFav = favProducts.some((i) => i.id === prd.id);
    const handleAddToFav = (prd) => {
      if (isInFav) {
        deleteFavPrd(prd.id);
        toast.error(<h1>{prd.title} delete from favorites</h1>);
      } else {
        addToFav(prd);
        toast.success(<h1>{prd.title} add to favorites</h1>);
      }
    };


// * ==================   JSX COMPONENT ELEMENTS  =================== 
  return (
    <div className="details-item w-full!">
      <div className="name">{prd.title}</div>

      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">$ {prd.price}</p>

      <h5>Availability : {prd.availabilityStatus}</h5>
      <h5>
        Brand : <span>{prd.brand}</span>
      </h5>
      <p className="desc">{prd.description}</p>
      <h5 className="stock">
        Hurry Up Only {prd.stock} products ledt in stock
      </h5>

      <button
        className={`p-2 w-35 rounded-4xl flex items-center justify-between btn ${isInCart ? "in-cart" : ""}`}
        onClick={() => handleAddToCart(prd)}
      >
        {isInCart ? "Item In Cart" : "Add To Cart"} <TiShoppingCart />
      </button>

      <div className="icons">
        <span className={`fav-icon ${isInFav? 'in-fav' : ''}`} onClick={() => handleAddToFav(prd)}>
          <FaRegHeart fill={`${isInFav ? 'var(--white_color)' :'var(--main_color)'  }`} />
        </span>
        <span>
          <FaShare fill="var(--main_color)" />
        </span>
      </div>
    </div>
  );
}
