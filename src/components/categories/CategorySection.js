import React from 'react'
import CategoryCard from './CategoryCard'

function CategorySection({ categoryData }) {
    return (
        <div className='py-10'>
            <div className='mb-4 text-center'>
                <h2 className='text-lg font-bold'>Categories</h2>
            </div>
            <div className='grid grid-cols-4'>
                {
                    categoryData &&
                    categoryData.map(category =>
                        <CategoryCard
                            key={category._id}
                            category={category} />
                    )
                }
            </div>
        </div>
    )
}

export default CategorySection