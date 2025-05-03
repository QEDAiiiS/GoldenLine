import React from "react";
import Product from "./Product";
import "./slideProduct.css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SlideProduct({title}) {
  return (
    <>
      <div className="slide_products slid py-[50px]">
        <div className="container">
          <div className="top_slide">
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              praesentium!
            </p>
          </div>
            <div className="product-slider">

          <Swiper
        //    autoplay={{delay: 2500,disableOnInteraction: false, }}
           loop={true}
            slidesPerView={5}
             navigation={true}
              modules={[Autoplay, Navigation]} className="mySwiper mt-[20px]">
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
            <SwiperSlide><Product /></SwiperSlide>
          </Swiper>
            </div>
        </div>
      </div>
    </>
  );
}
