import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ReviewForm(props) {
  let { foodId } = useParams()
  const { reviewDetails } = props

  const [review, setReview] = useState({
    reviewer: '',
    title: '',
    content: '',
    rating: 0,
    food_id: foodId,
  })

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails)
    }
  }, [foodId, reviewDetails, props])


  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(review, foodId)
    if (reviewDetails) {
      props.toggleView()
    }
    setReview({
      reviewer: '',
      content: '',
      rating: 0,
      food_id: foodId,
    })
  }
  return (
    <div className='Edit'>
      {props.children}
      <form
        onSubmit={handleSubmit}
        className='bg-[#FDEEDC] p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 '
      >
        <br />
        <div className='mb-5'>
          <label
            htmlFor='reviewer'
            className='block mb-2 font-bold text-gray-600 text-left '
          >
            Name:
          </label>
          <input
            id='reviewer'
            value={review.reviewer}
            type='text'
            onChange={handleTextChange}
            placeholder='Your name'
            required
            className='border border-gray-300 shadow p-3 w-full rounded mb '
          />
          <br />
          <br />
          <label
            htmlFor='rating'
            className='block mb-2 font-bold text-gray-600 text-left'
          >
            Rating:
          </label>
          <input
            id='rating'
            type='number'
            name='rating'
            min='0'
            max='5'
            step='1'
            value={review.rating}
            onChange={handleTextChange}
            className='border border-gray-300 shadow p-3 w-full rounded mb '
          />
          <br />
          <br />
          <label
            htmlFor='content'
            className='block mb-2 font-bold text-gray-600 text-left'
          >
            Review:
          </label>
          <textarea
            id='content'
            type='text'
            name='content'
            value={review.content}
            placeholder='What do you think...'
            onChange={handleTextChange}
            className='w-full p-2 border-2 text-gray-500 rounded-lg'
          />
        </div>
        <br />
        <input
          type='Submit'
          value='Submit Review'
          className='h-10 px-5 m-2 bg-[#202053] text-white hover:bg-[#4040A6] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        />
      </form>
    </div>
  )
}

export default ReviewForm
