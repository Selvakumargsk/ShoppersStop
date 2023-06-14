import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="bannerForHome">
        <h1>Shopper's Stop</h1>
        <div className="banner-content">
          <p className="">Discover the Latest Trends</p>
          <p>Shop Now for Fashion, Electronics & More</p>
          <p>Get Exclusive Deals and Discounts</p>
          <p
            className="button"
            onClick={() => {
              Navigate("/products");
            }}
          >
            Shop here
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
