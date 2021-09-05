import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Ride({image,time,name,info}) {
    return (
        <div className="ride">
        <div className="ride-image-container">
            <img src={image} alt="ride-image" />
            <p>{time}</p>
        </div>
        <div className="ride-detail">
            <h3>{name}</h3>
            <p>{info}</p>
        </div>
        <ArrowForwardIosIcon className="ride-arrow-icon" />
        </div>
    )
}

export default Ride
