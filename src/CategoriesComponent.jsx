import React from 'react'


const CategoriesComponent = ({ Categories, FilterItems }) => {
    return (
        <div className="categories row mt-5 mb-2">
            {Categories.map((Category, index) =>
                <button onClick={() => FilterItems(Category)} className="Category-btn" key={index} >{Category}</button>)}
        </div>
    )
}


export default CategoriesComponent;