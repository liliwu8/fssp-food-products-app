import { useState } from 'react'
import ReviewForm from './ReviewForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }

  //keys-
  const starArray = [...Array(5).keys()].map((i) => i + 1)

  return (
    <div className='Review md:w-3/4 mx-auto my-[20px] lg:w-[80%]'>
      <hr className='my-3 h-px bg-gray-200 border-0 dark:bg-gray-700' />
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className='text-left text-[19px] font-medium leading-9 '>
          <h5>{review.reviewer}</h5>
          {starArray.map((i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              color={review.rating >= i ? 'orange' : 'lightgrey'}
            />
          ))}
          <p>{review.content}</p>
        </div>
      )}
      <div className='flex pt-[3px] '>
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
    </div>
  )
}

export default Review
