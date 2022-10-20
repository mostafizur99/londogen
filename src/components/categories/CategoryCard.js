import React from 'react'

const CategoryCard = ({ category }) => {
    const { title, picture } = category
    return (
        <div>
            <div className='mb-3'>
                <img src={picture} alt="category" />
                <h2>{title} </h2>
            </div>
        </div>
    )
}

export default CategoryCard