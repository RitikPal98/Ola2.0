import React from "react";
import "./BannerMain.css";
import CabSearch from "./CabSearch";
import Category from "./Category";
function BannerMain() {
  return (
    <div className="bannerMain-container">
      <div className="bannerMain">
      <div className="bannerMain-heading">
        <h1>Book a City Taxi to your destination in town.</h1>
        <p>Choose from a range of categories and prices</p>
      </div>
      <div className="bannerMain-cabSearch">
    <CabSearch />
      </div>
      <div className="bannerMain-category">
          <Category />
      </div>
    </div>
    </div>
  );
}

export default BannerMain;
