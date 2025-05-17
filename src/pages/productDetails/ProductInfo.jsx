import React, { useContext } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";





export default function ProductInfo({ prd }) {
  const { cartItems, addToCart } = useContext(cartContext);
  const navigate = useNavigate()
  const isInCart= cartItems.some((i) => i.id === prd.id)

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
  return (
    <div className="details-item">
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

      <button className= {`btn ${isInCart? 'in-cart': ''}`} onClick={() => handleAddToCart(prd)}>
       {isInCart ? 'Item In Cart' : 'Add To Cart'}  <TiShoppingCart />
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
  );
}
