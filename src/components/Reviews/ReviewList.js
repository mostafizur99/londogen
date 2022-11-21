import React from 'react'

const ReviewList = ({reviewDataALL}) => {
  return (
    <div className='mt-8 py-4'>
         <h2 className='text-center font-semibold text-lg'>Review List</h2>
         <div className='flex'>
       {
          reviewDataALL?.map((item,index)=>(
            <div key={index}>
                <h3>{item?.review}</h3>
                <p>{item?.rating}</p>
            </div>
          ))
       }
         </div>
    </div>
  )
}

export default ReviewList