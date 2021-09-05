import React from 'react'

function Tabcontent({vid,image,title,headline,info,icon1,icon2,icon3}) {
    return (
        <div id={vid} className="tabContent">
           <div className="tabContent-img">
               <img src={image} alt="vehicle"/>
           </div>
           <div className="tabContent-info">
               <h1>{title}</h1>
               <h4>{headline}</h4>
               <p>{info}</p>
           <div className="tab-icons">
               <img src="/images/ti1.svg" alt="icon"/>
               <img src="/images/ti2.svg" alt="icon"/>
               <img src="/images/ti3.svg" alt="icon"/>
           </div>
           </div>
        </div>
    )
}

export default Tabcontent
