import React, { useState } from 'react'
import CategoriesComponent from './CategoriesComponent';
import MenuComponent from './MenuComponent';
import Items from './Data';
import './App.css';

// 
const allCategories = Items.map((item) => item.category)
const categories = ["All", ...new Set(allCategories)];
// console.log(categories);

const App = () => {

    // hooks
    const [MenuItems, setMenuItems] = useState(Items)
    const [Categories, setCategories] = useState(categories);

    // Filter Items Function
    const FilterItems = (Category) => {
        if (Category === "All") {
            setMenuItems(Items)
            return;
        }
        // filtering items on basis of categories
        const newItems = Items.filter((item) => item.category === Category)
        setMenuItems(newItems);
    }
    // Return
    return (
        <div className="Body text-center">
            <h1 className="heading mt-2">Our Menu</h1>
            <CategoriesComponent
                Categories={Categories}
                FilterItems={FilterItems}
            />
            <MenuComponent
                MenuItems={MenuItems}
            />
        </div>
    )
}

export default App;