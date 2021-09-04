import React from "react";
import "./Details.css";
import DetailCard from "./DetailCard";
function Details() {
  return (
    <div className="details-container">
      <div style={{ marginLeft: "4.5%" }} className="services-headings">
        <h1>A Car for every occasion</h1>
        <p>
          Ola offers city taxis, inter-city cabs, and local cabs at hourly
          packages
        </p>
      </div>
      <div className="details">
        <DetailCard
          image="/images/d1.jpg"
          title="Cabs for Every Pocket"
          detail="From Sedans and SUVs to Luxury cars for special occasions, we have
          cabs to suit every pocket"
        />
        <DetailCard
          image="/images/d2.jpg"
          title="Secure and Safer Rides"
          detail="Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience."
        />
        <DetailCard
          image="/images/d3.jpg"
          title="Ola Select"
          detail="A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time"
        />
        <DetailCard
          image="/images/d4.jpg"
          title="In Cab Entertainment"
          detail="Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility."
        />
        <DetailCard
          image="/images/d5.jpg"
          title="Share and Express"
          detail="To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!"
        />
        <DetailCard
          image="/images/d6.jpg"
          title="Cashless Rides"
          detail="Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments."
        />
      </div>
    </div>
  );
}

export default Details;
