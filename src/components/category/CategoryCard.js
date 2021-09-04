import React from 'react'

function CategoryCard({bid,image,title,info}) {
    return (
        <div id={bid} className="categoryCard">
            <div className="categoryCard-img">
                <img src={image} alt="category"/>
            </div>
            <div className="categoryCard-content">
                <h3 className="category-heading">{title}</h3>
                <p className="category-info">{info}</p>
            </div>
        </div>
    )
}

export default CategoryCard
