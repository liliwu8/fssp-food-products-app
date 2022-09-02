import { useState } from 'react'
import ReviewForm from './ReviewForm'

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false)

  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  }
console.log(review)
  return (
    <div>
      <button onClick={toggleView}>edit this review</button>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </div>
      )}
      <button onClick={() => handleDelete(review.id)}>delete</button>
    </div>
  )
}

export default Review
