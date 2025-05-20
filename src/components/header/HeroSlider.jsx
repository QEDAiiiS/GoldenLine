import slide1 from '/img/banner_Hero1.jpg'
import slide2 from '/img/banner_Hero2.jpg'
import slide3 from '/img/banner_Hero3.jpg'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";








// * FUNCTION COMPONENT 
export default function HeroSlider() {
  return (
    <>
    
    <div className="hero relative mb-10">
      <div className="container ">
        
        
        {/* // * ==================  SWIPER   =================== */}
        <Swiper 
        loop= {true}
        
         autoplay={{
         delay: 4500,
         disableOnInteraction: false, }}
        pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">



        {/* // * ==================  SWIPER   SLIDES  =================== */}
          <SwiperSlide >
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controler</h3>
                <p >Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to={'/'} className="btn">Shop Now</Link>
            </div>
            <img src={slide1} alt="Hero Slider 1" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox  <br /> 360 Controler</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to={'/'} className="btn">Shop Now</Link>
            </div>
            <img src={slide2} alt="Hero Slider 1" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox  <br /> 360 Controler</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to={'/'} className="btn">Shop Now</Link>
            </div>
            <img src={slide3} alt="Hero Slider 1" />
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
    
    </>
  );
}
