
import React from 'react'
import { FaCartArrowDown, FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'

export default function Product() {
  return (
    <div className="product">
        <div className="img-product">
            <img src="https://lifemobile.lk/wp-content/uploads/2024/09/apple-iPhone-16-1.jpg" alt="" />
        </div>

        <p className="name-product">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptatem?</p>


        <div className="stars">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStarHalfStroke/>
        </div>

        <p className="price">$ 10000</p>

        <div className="icons">
           <span><FaCartArrowDown/></span> 
           <span><FaRegHeart/></span> 
           <span> <FaShare/></span>
        </div>
    </div>
)
}


