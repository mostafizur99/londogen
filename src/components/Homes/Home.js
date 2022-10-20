import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CategorySection from '../categories/CategorySection';

const Home = () => {
    const categoryData = useLoaderData();

    return (
        <div className='container mx-auto'>
            <h2 className='text-center'>Home Page</h2>

            <CategorySection categoryData={categoryData} />
        </div>
    )
}

export default Home