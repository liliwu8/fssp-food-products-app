import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import ReviewForm from './ReviewForm'
const API = process.env.REACT_APP_API_URL

function Reviews() {
  const [reviews, setReviews] = useState([])
  let { foodId } = useParams()

  useEffect(() => {
    axios
      .get(`${API}/foods/${foodId}/reviews`)
      .then((res) => {
        setReviews(res.data)
      })
      .catch((err) => console.log(err))
  }, [foodId])

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/foods/${foodId}/reviews`, newReview)
      .then((response) => {
        setReviews([response.data, ...reviews])
      })
      .catch((c) => console.warn('catch', c))
  }

  const handleDelete = (id) => {
    axios
      .delete(`${API}/foods/${foodId}/reviews/${id}`)
      .then(() => {
        const copyReviewArray = [...reviews]
        const indexDeletedReview = copyReviewArray.findIndex((review) => {
          return review.id === id
        })
        copyReviewArray.splice(indexDeletedReview, 1)
        setReviews(copyReviewArray)
      })
      .catch((c) => console.warn('catch', c))
  }

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/foods/${foodId}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews]
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id
        })
        copyReviewArray[indexUpdatedReview] = response.data
        setReviews(copyReviewArray)
      })
      .catch((c) => console.warn('catch', c))
  }

  return (
    <section>
      <h2 className='flex-4 text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[2%]'>
        Reviews
      </h2>
      <ReviewForm handleSubmit={handleAdd}/>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleSubmit={handleEdit}
        />
      ))}
    </section>
  )
}

export default Reviews
