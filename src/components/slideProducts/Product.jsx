import React, { useContext } from "react";
import { FaCartArrowDown, FaCheck, FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/CartContext";

export default function Product({ item }) {
  // console.log(item);

  const { cartItems, addToCart } = useContext(cartContext);
  // console.log(cartItems);

  const isInCart= cartItems.some((i) => i.id === item.id)

  

  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/productDetails/${item.id}`}>

      <span className="status-cart"><FaCheck/> in Cart</span>
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
        <span className="btn-addtocart" onClick={() => addToCart(item)}>
          <FaCartArrowDown />
        </span>
        <span>
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
