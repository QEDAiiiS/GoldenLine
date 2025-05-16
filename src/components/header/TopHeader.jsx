import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from "../../contexts/CartContext";

export default function TopHeader() {
  const { cartItems } = useContext(cartContext);

  return (
    <div className="top_header">
      <div className="container py-[15px]  flex justify-between items-center">
        <Link to={"/"} className=" w-[100px]">
          <img src={Logo} alt="" />
        </Link>

        <form
          action=""
          className="search_box flex items-center bg-[var(--bg_color)] rounded-[30px] border border-[var(--main_color)]"
        >
          <input
            className="h-[30px] w-[340px] p-2 "
            type="text"
            placeholder="Search For Products"
          />
          <button
            className="h-[30px] w-[60px] bg-[var(--main_color)] font-[18px] cursor-pointer rounded-e-[30px] flex justify-center items-center"
            type="submit"
          >
            <FaSearch fill="var(--white_color)" />
          </button>
        </form>

        <div className="header_icons   flex gap-[30px]">
          <div className="icon relative cursor-pointer ">
            <FaRegHeart size={"28px"} />
            <span className="count pt-0.5 absolute top-[-5px] right-[-10px] bg-[var(--main_color)] text-[var(--white_color)] w-[20px] h-[20px] text-center text-[11px] rounded-[100%]">
              0
            </span>
          </div>

          <div className="icon  relative cursor-pointer">
            <Link to={'/cart'}>
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
