import React from "react";
import "./Fleet.css";
import FleetTab from "./FleetTab";
function Fleet() {
  return (
    <div className="fleet">
      <div style={{ marginLeft: "4.5%" }} className="services-headings">
        <h1>Meet our Awesome Fleet</h1>
        <p>The widest variety of cars to choose from</p>
      </div>
      <FleetTab/>
    </div>
  );
}

export default Fleet;
