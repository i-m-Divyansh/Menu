import React from 'react'
import ItemComponent from './ItemComponent';

const MenuComponent = ({ MenuItems }) => {
    return (
        <div className="Menu row">
            {MenuItems.map((item) => <ItemComponent
                price={item.price}
                title={item.title}
                key={item.id}
                Id={item.id}
                desc={item.desc}
                img={item.img}
            />)}
        </div>
    )
}


export default MenuComponent;