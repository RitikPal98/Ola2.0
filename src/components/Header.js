import React from "react";
import "./Header.css";
function Header() {
  return (
    <div id="headerid" className="header">
      <div className="header-top">
        <p>Drive with Ola</p>
        <p>Ola Money</p>
        <p>Ola Corporate</p>
        <p>Ola Fundation</p>
        <p>Share</p>
        <p>Support</p>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-icon">
          <img src="/images/ola-logo.svg" alt="logo" className="ola-logo"></img>
        </div>
        <div className="header-bottom-links">
          <p>Ola Drive</p>
          <p>Ola Select</p>
          <p>Ola Fleet</p>
          <p>Features</p>
          <button className="booking-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
