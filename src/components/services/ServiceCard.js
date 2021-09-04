import React from "react";

function ServiceCard({ image, title, logo, info, f1, f2, f3, sl1, sl2, sl3 }) {
  return (
    <div className="serviceCard">
      <div className="serviceCard-image">
        <img src={image} alt="image" className="service-image" />
      </div>
      <div className="serviceCard-heading">
        <p>{title}</p>
        <div className="service-logo">
          <img src={logo} width="100%" height="60" alt="logo"></img>
        </div>
      </div>
      <div className="serviceCard-info">
        <p>{info}</p>
      </div>
      <div className="serviceCard-features">
        <div>
          <img src={sl1} alt="" className="service-info-image" />
          <p>{f1}</p>
        </div>
        <div>
          <img src={sl2} alt="" className="service-info-image" />
          <p>{f2}</p>
        </div>
        <div>
          <img src={sl3} alt="" className="service-info-image" />
          <p>{f3}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
