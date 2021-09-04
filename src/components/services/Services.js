import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <div className="services">
    <div className="services-headings">

      <h1>A Car for every occasion</h1>
      <p>
        Ola offers city taxis, inter-city cabs, and local cabs at hourly
        packages
      </p>
    </div>
      <div className="services-cards-container">
        <ServiceCard
          image="/images/1.jpg"
          title="City Taxi"
          logo="/images/car.svg"
          info="The perfect way to get through your everyday travel needs. City taxis
          are available 24/7 and you can book and travel in an instant. With
          rides starting from as low as Rs. 6/km, you can choose from a wide
          range of options! You can also opt to do your bit for the environment
          with Ola Share!"
          sl1="/images/s1l1.svg"
          sl2="/images/s1l2.svg"
          sl3="/images/s1l3.svg"
          f1="AC Cabs"
          f2="pocket friendly"
          f3="Cashless rides"
        />
        <ServiceCard
          image="/images/2.jpg"
          title="Outstation"
          logo="/images/car2.svg"
          info="Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service. Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes."
          sl1="/images/s2l1.svg"
          sl2="/images/s2l2.svg"
          sl3="/images/s2l3.svg"
          f1="one-way trip"
          f2="Advance booking"
          f3="Safe Rides"
        />
        <ServiceCard
          image="/images/3.jpg"
          title="Rentals"
          logo="/images/car3.svg"
          info="With Ola Rentals you get a cab at your disposal. So be it a  day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!"
          sl1="/images/s3l1.svg"
          sl2="/images/s3l2.svg"
          sl3="/images/s3l3.svg"
          f1="hourly packages"
          f2="Multiple stops"
          f3="Top-Rated Partners"
        />
      </div>
    </div>
  );
}

export default Services;
