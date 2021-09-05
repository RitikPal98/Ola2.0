import React from 'react'
import "./BannerBottom.css"
import CategoryCard from './category/CategoryCard'
function BannerBottom() {
    return (
        <>
        <div className="bannerBottom">
            <div className="banner-bottom-headings">
               <div className="services-headings">
                <h1>Book an Ola from the App</h1>
                <p>Download the app for exclisove deal and ease of booking.</p>
               </div>
                <div className="images-container">
                <img src="images/playstore.png" alt="banner"/>
                <img src="images/appstore.png" alt="banner"/>
                <img src="images/windowstore.png" alt="store"/>
                </div>
            </div>
            <div className="bannerbottom-image">
                <img src="images/bannerbottom.png" alt="banner"/>
            </div>
        </div>
        <div className="service-bottom-container">
        <div className="service-bottom-card">
            <img src="images/sb1.svg" alt="service image" />
            <div className="service-bottom-heading">
                <h3>24/7 Customer support</h3>
                <p>A dedicated 24x7 customer support team always at your service to help solve any problem</p>
            </div>
        </div>
        <div className="service-bottom-card">
            <img src="images/sb2.svg" alt="service image" />
            <div className="service-bottom-heading">
                <h3>24/7 Customer support</h3>
                <p>A dedicated 24x7 customer support team always at your service to help solve any problem</p>
            </div>
        </div>
        <div className="service-bottom-card">
            <img src="images/sb3.svg" alt="service image" />
            <div className="service-bottom-heading">
                <h3>24/7 Customer support</h3>
                <p>A dedicated 24x7 customer support team always at your service to help solve any problem</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default BannerBottom
