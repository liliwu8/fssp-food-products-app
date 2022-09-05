import { useState } from 'react'
import ReviewForm from './ReviewForm'
function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }

  return (
    <div className='Review p-10 rounded-3xl shadow md:w-3/4 mx-auto my-[30px] lg:w-1/2 bg-[#FFFDE8]		'>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className='text-left'>
          <h5>{review.reviewer}</h5>
          <br />
          <p>{review.rating}</p>
          <br />
          <p>{review.content}</p>
          <br />
        </div>
      )}
      <button
        onClick={toggleView}
        className='h-10 px-5 m-2 bg-[#202053] text-white hover:bg-[#4040A6] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      >
        Edit Review
      </button>
      <button
        onClick={() => handleDelete(review.id)}
        className='h-10 px-5 m-2 bg-[#C83E2D] text-white hover:bg-[#D65B4C] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      >
        delete
      </button>
    </div>
  )
}

export default Review
