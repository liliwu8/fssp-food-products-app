import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import ReviewForm from './ReviewForm'
const API = process.env.REACT_APP_API_URL

function Reviews() {

  const [reviews, setReviews] = useState([])
  let {id } = useParams()

  useEffect(() => {
    axios.get(`${API}/foods/${id}/reviews`).then((res) => {
      setReviews(res.data)
      console.log(res)
    })
  }, [id])
  
  console.log(`${id}`)
  
  const handleAdd = (newReview) => {
    axios
      .post(`${API}/foods/${id}/reviews`, newReview)
      .then((response) => {
        setReviews([response.data, ...reviews])
      })
      .catch((c) => console.warn('catch', c))
  }

  const handleDelete = (id) => {
    axios
      .delete(`${API}/foods/${id}/reviews/${id}`)
      .then(
        () => {
          const copyReviewArray = [...reviews]
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id
          })
          copyReviewArray.splice(indexDeletedReview, 1)
          setReviews(copyReviewArray)
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c))
  }

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/foods/${id}/reviews/${updatedReview.id}`, updatedReview)
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
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
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
