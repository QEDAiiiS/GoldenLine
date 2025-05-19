import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from "../../contexts/CartContext";
import SearchBox from "./SearchBox";
import { favContext } from "../../contexts/FavContext";

// ! FUNCTION COMPONENT
export default function TopHeader() {
  const { cartItems } = useContext(cartContext);
  const {favProducts} = useContext(favContext)

  // ! COMPONENT ELEMENTS
  return (
    <div className="top_header">
      <div className="container py-[15px]  flex justify-between items-center">
        <Link to={"/"} className=" w-[100px]">
          <img src={Logo} alt="" />
        </Link>

        <SearchBox />

        <div className="header_icons   flex gap-[30px]">
          <Link to={"/favPage"}>
            <div className="icon relative cursor-pointer ">
              <FaRegHeart size={"28px"} />
              <span className="count pt-0.5 absolute top-[-5px] right-[-10px] bg-[var(--main_color)] text-[var(--white_color)] w-[20px] h-[20px] text-center text-[11px] rounded-[100%]">
                {favProducts.length}
              </span>
            </div>
          </Link>

          <div className="icon  relative cursor-pointer">
            <Link to={"/cart"}>
              <TiShoppingCart size={"28px"} />
              <span className="count pt-0.5 absolute top-[-5px] right-[-10px] bg-[var(--main_color)] text-[var(--white_color)] w-[20px] h-[20px] text-center text-[11px] rounded-[100%]">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
