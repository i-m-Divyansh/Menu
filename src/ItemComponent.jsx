import React from 'react'


const ItemComponent = ({ img, title, price, desc }) => {
    return (
        <div className="item shadow col-md-3">
            <div className="item-img">
                <img id="Image" src={img} alt="" />
            </div>
            <div className="item-info">
                <div className="item-title">
                    <h4 className="text-primary">{title}</h4>
                    <h5 className="text-warning">${price}</h5>
                </div>
                <div className="desc">
                    <p className="text-secondary">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemComponent;