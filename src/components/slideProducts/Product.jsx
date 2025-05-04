
import React from 'react'
import { FaCartArrowDown, FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'

export default function Product({item}) {


    // console.log(item);
    


  return (
    <div className="product">
        <div className="img-product">
            <img src={item.images[0]} alt="" />
        </div>

        <p className="name-product">{item.title}</p>


        <div className="stars">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStarHalfStroke/>
        </div>

        <p className="price">$ {item.price}</p>

        <div className="icons">
           <span><FaCartArrowDown/></span> 
           <span><FaRegHeart/></span> 
           <span> <FaShare/></span>
        </div>
    </div>
)
}


