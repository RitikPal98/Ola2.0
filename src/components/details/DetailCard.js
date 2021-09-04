import React from "react";

function DetailCard({image,title,detail}) {
  return (
    <div className="detailCard">
      <div className="detailCard-image">
        <img src={image} alt="image"/>
      </div>
      <div className="detailCard-info">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default DetailCard;
