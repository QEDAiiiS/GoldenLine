import React from "react";



// * ==================  FUNCTION COMPONENT  =================== 
export default function SlideProductLoading() {
  return (
    <div className="loading-slideProduct">

      <div className="slide_products slid py-[30px]">
        <div className="container">

      {/* // * ==================  TOP SLIDE PRODUCT  ===================  */}
          <div className="top_slide">
            <h2 className=" capitalize skeltion"></h2>
            <p className="skeltion"></p>
          </div>


        {/* // * ==================  PRODUCTS  ===================  */}
          <div className="products-loading">
            <div className="product">
              <div className="img-product skeltion"></div>
              <div className="contentL skeltion"></div>
              <div className="contentL skeltion"></div>
            </div>

            <div className="product">
              <div className="img-product skeltion"></div>
              <div className="contentL skeltion"></div>
              <div className="contentL skeltion"></div>
            </div>

            <div className="product">
              <div className="img-product skeltion"></div>
              <div className="contentL skeltion"></div>
              <div className="contentL skeltion"></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
