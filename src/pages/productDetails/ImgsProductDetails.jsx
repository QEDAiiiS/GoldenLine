import React, { useEffect, useState } from "react";


// * ==================  FUNCTION COMPONENT  =================== 
export default function ImgsProductDetails({ prd }) {

// * ==================  MY HOOKS  =================== 
  const [mainImg, setMainImg] = useState(null);

  // to change the main img if the user select product from related products
// * ==================  CHANGE MAIN IMG  =================== 
  useEffect(() => {
    setMainImg(null);
  }, [prd]);



// * ==================  JSX COMPONENT ELEMENTS  =================== 
  return (
    <div className="imgs-item">

{/* // * ==================  MAIN IMG  ===================  */}
      <div className="main-img">
        <img src={mainImg ? mainImg : prd.images[0]} alt="" />
      </div>


{/* // * ==================  MAP SMALL IMGS  ===================  */}
      <div className="sm-imgs">
        {prd.images.map((img) => (
          <img
            key={img}
            src={img}
            // alt={product.title}
            onClick={() => setMainImg(img)}
          />
        ))}
      </div>
    </div>
  );
}
