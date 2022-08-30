import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL

function FoodDetails() {
  const [food, setFood] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/foods/${id}`)
      .then((res) => {
        setFood(res.data.payload)
      })
      .catch(() => {
        navigate('/not-found')
      })
  }, [id, navigate])

  const handleDelete = () => {
    axios
      .delete(`${API}/foods/${id}`)
      .then(() => {
        navigate('/foods')
      })
      .catch((err) => {
        console.warn(err)
      })
  }
  let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (
    <div className='mt-16 mx-auto px-2 lg:px-50 flex-grow h-full w-full'>
      <section className='h-full'>
        <article className='body-font overflow-hidden'>
          <div className='container px-5  mx-auto'>
            <div className=' lg:w-4/5 mx-auto flex flex-wrap'>
              <img
                src={food.image}
                alt='dishpic'
                className='lg:w-1/2 lg:h-1/2   object-contain md:object-cover object-center rounded'
              />
              <div className='lg:w-1/2 lg:pl-10 lg: lg:h-1/2 lg:mt-0 text-left leading-8'>
                <p>Original Name: {food.originalname}</p>
                <p>Name: {food.name}</p>
                <p>Price: {dollarUS.format(food.price)}</p>
                <p>Location: {food.location}</p>
                <p className='pb-1'>
                  Ingredients: {food.ingredients}
                </p>
                <Link to={`/foods`}>
                  <button>Back</button>
                </Link>
                <Link to={`/foods/${id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default FoodDetails
