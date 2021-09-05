import React from 'react'
import "./BookNow.css"
import CabSearch from '../../components/CabSearch'
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import Ride from './Ride';
import {useHistory} from "react-router-dom"

function BookNow() {
    let history = useHistory();
    return (
        <div className="bookNow">
            <div className="booknow-left">
            <div className="booknow-left-header">
                <MenuIcon/>
                <div className="booknow-logo-container">
                <img onClick={()=>history.push("/")} src="/images/ola-logo.svg" alt="logo"></img>
                </div>
                <Button>LOG IN</Button>
            </div>
            <CabSearch/>
            <div className="booknow-left-rides">
            <p>AVAILABLE RIDES</p>
            <div className="booknow-left-rides-list">
                <Ride image="images/tabi11.svg" time="2 min" name="Auto" info="Get an auto at your doorstep" />
                <Ride image="images/tabi44.svg" time="5 min" name="Mini" info="Get an auto at your doorstep" />
                <Ride image="images/tabi22.svg" time="4 min" name="Bike" info="Get an auto at your doorstep" />
                <Ride image="images/tabi66.svg" time="7 min" name="Prime Sedan" info="Get an auto at your doorstep" />
                <Ride image="images/tabi77.svg" time="4 min" name="Prime Play" info="Get an auto at your doorstep" />
                <Ride image="images/tabi88.svg" time="3 min" name="Prime SUV" info="Get an auto at your doorstep" />
                <Ride image="images/tabi99.svg" time="10 min" name="Lux" info="Get an auto at your doorstep" />
            </div>
            </div>            
            </div>
            <div className="booknow-right">
                <img src="/images/booknow-banner1.jpg" alt="background" />
            </div>
        </div>
    )
}

export default BookNow
