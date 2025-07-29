import slide1 from "/img/banner_Heroo1.png";
import slide2 from "/img/banner_Hero2.jpg";
import slide3 from "/img/banner_Hero3.jpg";
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
      <div className="relative pt-28 lg:pt-36">
        <div className="lg:container mx-auto">



          <Swiper
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="lg:my-6 "
          >


            <SwiperSlide>
              <div className="content ">
                <h4 className=" text-sm text-stone-600">Introducing the new</h4>
                <h3 className="text-5xl">
                  Sleek Design.
                  <br /> Powerful <br /> Performance.
                </h3>
                <p className="text-stone-600">
                  Discover the latest generation smartphone
                  <br /> with a stunning triple-lens camera <br />
                  and ultra-modern design.
                  <br /> Built to keep up with your lifestyle.
                </p>
                <Link to={"/"} className="btn p-1.5 rounded-3xl text-sm md:text-xl md:p-2">
                  Shop Now
                </Link>
              </div>
              <div className="h-[440px] lg:w-6/7 mx-auto ">
                <img src={slide1} alt="" className="object-cover md:rounded-3xl h-full w-full img" />
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="content ">
                <h4 className=" text-sm text-stone-600">Introducing the new</h4>
                <h3 className="text-5xl">
                  Sleek Design.
                  <br /> Powerful <br /> Performance.
                </h3>
                <p className="text-stone-600">
                  Discover the latest generation smartphone
                  <br /> with a stunning triple-lens camera <br />
                  and ultra-modern design.
                  <br /> Built to keep up with your lifestyle.
                </p>
                <Link to={"/"} className="btn p-1.5 rounded-3xl text-sm md:text-xl md:p-2">
                  Shop Now
                </Link>
              </div>
              <div className="h-[440px] lg:w-6/7 mx-auto ">
                <img src={slide2} alt="" className="object-cover md:rounded-3xl h-full w-full img" />
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="content ">
                <h4 className=" text-sm text-stone-600">Introducing the new</h4>
                <h3 className="text-5xl">
                  Sleek Design.
                  <br /> Powerful <br /> Performance.
                </h3>
                <p className="text-stone-600">
                  Discover the latest generation smartphone
                  <br /> with a stunning triple-lens camera <br />
                  and ultra-modern design.
                  <br /> Built to keep up with your lifestyle.
                </p>
                <Link to={"/"} className="btn p-1.5 rounded-3xl text-sm md:text-xl md:p-2">
                  Shop Now
                </Link>
              </div>
              <div className="h-[440px] lg:w-6/7 mx-auto ">
                <img src={slide3} alt="" className="object-cover md:rounded-3xl h-full w-full img" />
              </div>
            </SwiperSlide>


          </Swiper>




        </div>
      </div>
    </>
  );
}
