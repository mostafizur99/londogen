import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../categories/CategoryCard';

const Home = () => {
    const categoryData = useLoaderData();

    return (
        <div className='container mx-auto'>
            Home Page

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
        </div>
    )
}

export default Home