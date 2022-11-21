import React, { useRef } from 'react'

const AddReview = (props) => {
    const reviewInputRef = useRef();
    const ratingInputRef = useRef();

    const addReviewHandler=(e)=>{
        e.preventDefault()
        const enteredReview = reviewInputRef.current.value;
        const enteredRating = ratingInputRef.current.value;
        props.onAddReview(enteredReview, enteredRating)
    }
    
  return (
    <div>
        <h2 className='text-center font-semibold text-lg'>Add Review</h2>
       <div className='flex justify-center'>
       <form onSubmit={addReviewHandler}>
          <div>
            <label htmlFor="review">Review</label>
            <input
                id="review"
                type="text"
                ref={reviewInputRef}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
                id="rating"
                type="number"
                ref={ratingInputRef}
            />
          </div>
          <button className='bg-cyan-500 px-2 py-1' type="submit">Submit Review</button>
        </form>
       </div>
    </div>
  )
}

export default AddReview