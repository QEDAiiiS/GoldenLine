import React from "react";
import Product from "./Product";
import "./slideProduct.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";




// * ==================  FUNCTION COMPONENT  =================== 
export default function SlideProduct({data, title}) {

// * ==================   JSX COMPONENT  ELEMENTS =================== 
  return (
    <>
      <div className="slide_products slid py-[30px]">
        <div className="container">
          <div className="top_slide">
            <h2 className=" capitalize">{title}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              praesentium!
            </p>
          </div>
            <div className="product-slider">

    {/* // * ==================  SWIPER  ===================  */}
          <Swiper
           autoplay={{delay: 2500,disableOnInteraction: false, }}
           loop={true}
            slidesPerView={5}
             navigation={true}
              modules={[Autoplay, Navigation]} className="mySwiper mt-[20px]">



            {data.map((i)=>{return  <SwiperSlide><Product item={i} /></SwiperSlide> })}
            




          </Swiper>
            </div>
        </div>
      </div>
    </>
  );
}
