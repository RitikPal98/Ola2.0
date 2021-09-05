import React from "react";
import "./Header.css";
import {useHistory} from "react-router-dom"
function Header() {
  let history = useHistory();
  return (
    <div id="headerid" className="header">
      <div className="header-top">
        <p>Drive with Ola</p>
        <p>Ola Money</p>
        <p>Ola Corporate</p>
        <p>Ola Fundation</p>
        <p>Share</p>
        <p>Offers</p>
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
          <button onClick={()=>history.push("/booknow")} className="booking-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
