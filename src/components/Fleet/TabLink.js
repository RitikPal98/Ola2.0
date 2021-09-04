import React from "react";

function TabLink({icon1, icon2, name,showFleet,vid}) {
  return (
    <div
    id={"t"+vid} 
    onClick={(e)=>showFleet(e,vid)}
    className="fleetTab-link">
      <div className="fleetTab-link-icon-container">
        <img
          src={icon1}
          alt="vehicle-icon"
          width="100%"
          height="60px"
          className="icon1"
        />
        <img
          src={icon2}
          alt="vehicle-icon"
          width="100%"
          height="60px"
          className="icon2"
        />
      </div>
      <p>{name}</p>
      <img src="/images/triangle-up-active.svg" alt="triangle" width="35%" />
    </div>
  );
}

export default TabLink;
