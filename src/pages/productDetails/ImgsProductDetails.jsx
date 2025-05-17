



import React, { useEffect, useState } from "react";





export default function ImgsProductDetails({prd}) {


  const [mainImg, setMainImg] = useState(null);

// to change the main img if the user select product from related products
  useEffect(()=>{
    setMainImg(null)
  },[prd])


  return (
    <div className="imgs-item">
      <div className="main-img">
        <img src={mainImg ? mainImg:prd.images[0]} alt="" />
      </div>

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
