import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categoryData = useLoaderData();

    return (
        <div className='container mx-auto'>
            Home Page

            <div className='grid grid-cols-4 py-10'>
                {
                    categoryData &&
                    categoryData.map(category => (
                        <div key={category._id} className='mb-3'>
                            <img src={category.picture} alt="category" />
                            <h2>{category.title} </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home