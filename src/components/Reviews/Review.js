import React, { useState } from 'react'
import AddReview from './AddReview'
import ReviewList from './ReviewList'

const Review = () => {
    const [reviewData, setReviewData] = useState([]);

    const addReviewHandler=(nReview, nRating)=>{
        setReviewData((previousData)=>{
            return[
                ...previousData,
                {review:nReview, rating:nRating }
            ]
        })
    }
  return (
    <div className='container mx-auto'>
        Reviews
        <AddReview onAddReview={addReviewHandler} />
        <ReviewList reviewDataALL={reviewData} />
        </div>
  )
}

export default Review