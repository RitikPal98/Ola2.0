import React from "react";
import "./Footer.css";
import { Facebook, Instagram, YouTube, Twitter } from "@material-ui/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <p>Top Visited Cities</p>
      </div>
      <div className="footer-mid">
        <div className="footer-mid-left">
          <p>Popular Outstation Routes</p>
        </div>
        <div className="footer-mid-right">
          <div>
            <p>Northern India</p>
            <a>Delhi to Chandigarh Outstation Cabs </a>
            <a>Delhi to Agra Outstation Cabs </a>
            <a>Delhi to Jaipur Outstation Cabs </a>
            <a>Delhi to Shimla Outstation Cabs </a>
            <a>Delhi to Nainital Outstation Cabs </a>
            <a>Jaipur to Delhi Outstation Cabs </a>
          </div>
          <div>
            <p>Southern India</p>
            <a>Chennai to Pondicherry Outstation Cabs </a>
            <a>Chennai to Tirupati Outstation Cabs </a>
            <a>Chennai to Vellore Outstation Cabs </a>
            <a>Hyderabad to Vijayawada Outstation Cabs </a>
            <a>Hyderabad to Warangal Outstation Cabs </a>
            <a>Hyderabad to Tirupati Outstation Cabs </a>
          </div>
          <div>
            <p>East & West India</p>
            <a>Mumbai to Pune Outstation Cabs</a>
            <a>Mumbai to Mahabaleshwar Outstation Cabs</a>
            <a>Mumbai to Lonavala Outstation Cabs</a>
            <a>Mumbai to Nashik Outstation Cabs</a>
            <a>Mumbai to Matheran Outstation Cabs</a>
            <a>Mumbai to Shirdi Outstation Cabs</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-socialLinks">
          <p>Social Links</p>
          <div>
            <Facebook />
            <Instagram />
            <YouTube />
            <Twitter />
          </div>
          <select className="dropDown-select">
            <option>India</option>
            <option>Australia</option>
            <option>United Kingdom</option>
            <option>New Zealand</option>
          </select>
        </div>
        <div className="footer-bottom-discover">
          <p style={{ color: "white" }}>discover Ola</p>
          <div>
            <p>About Ola</p>
            <p>Career</p>
            <p>Offers</p>
            <p>Contact Us</p>
            <p>Media Center</p>
          </div>
          <p>Become a driver</p>
          <p>Book a ride</p>
        </div>
        <div className="footer-bottom-logo-container">
          <img src="/images/ola-footer-logo.svg" alt="logo" />
          <div>
            <div>
              <p>Notice</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgb(190,220,0",
                letterSpacing: "1px",
                wordSpacing: "1.5px",
              }}
            >
              Made with love by Ritik Pal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
