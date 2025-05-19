import React, { useContext } from "react";
import {
  FaCartArrowDown,
  FaCheck,
  FaRegHeart,
  FaShare,
  FaStar,
} from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { favContext } from "../../contexts/FavContext";

// ! FUNCTION COMPONENT
export default function Product({ item }) {
  // console.log(item);

  const { cartItems, addToCart } = useContext(cartContext);
  // console.log(cartItems);
  const { favProducts, addToFav, deleteFavPrd } = useContext(favContext);

  const isInCart = cartItems.some((i) => i.id === item.id);

  //! Handel  Add To Cart
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

  const navigate = useNavigate();

  //! Handel  Add & DELETE To Favorites
  const isInFav = favProducts.some((i)=> i.id === item.id)
  const handleAddToFavorits = (item) => {
    if (isInFav) {
      deleteFavPrd(item.id);
      toast.error(<p>{item.title} delete from favorites</p>);
    } else {
      addToFav(item);
      toast.success(<p>{item.title} add to favorites</p>);
    }
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/productDetails/${item.id}`}>
        <span className="status-cart">
          <FaCheck /> in Cart
        </span>
        <div className="img-product">
          <img src={item.images[0]} alt="" />
        </div>

        <p className="name-product">{item.title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>

        <p className="price">$ {item.price}</p>
      </Link>

      <div className="icons">


        <span className="btn-addtocart" onClick={() => handleAddToCart(item)}>
          <FaCartArrowDown />
        </span>


        <span className={`btn-addtofav ${isInFav? 'in-fav' : ''} `} onClick={() => handleAddToFavorits(item)}>
          <FaRegHeart />
        </span>
        
        
        <span>
          {" "}
          <FaShare />
        </span>
      
      
      </div>
    </div>
  );
}
