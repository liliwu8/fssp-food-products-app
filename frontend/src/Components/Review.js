import { useState } from 'react'
import ReviewForm from './ReviewForm'
function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }

  return (
    <div className='Review bg-blue-200 p-10 rounded-lg shadow md:w-3/4 mx-auto my-[30px] lg:w-1/2 border border-black '>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className='text-left'>
          <h5>Name: {review.reviewer}</h5>
          <br />
          <p> Rate: {review.rating}</p>
          <br />
          <p>Comment: {review.content}</p>
          <br />
        </div>
      )}
      <button
        onClick={toggleView}
        className='h-10 px-5 m-2 bg-[#DE5E39] text-white hover:bg-[#E87B35] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      >
        Edit Review
      </button>
      <button
        onClick={() => handleDelete(review.id)}
        className='h-10 px-5 m-2 bg-[#DE5E39] text-white hover:bg-[#E87B35] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      >
        delete
      </button>
    </div>
  )
}

export default Review
