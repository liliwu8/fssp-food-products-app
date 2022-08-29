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
      .then((res) => {
        setFood(res.data.payload)
        navigate('/foods')
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  return (
    <div className=' flex item-center justify-between '>
      <div className=' ml-[6%]'>
        <img
          src={food.image}
          alt='dishpic'
          className='h-[300px] max-w-[400px] '
        />
      </div>
      <div className='leading-9 text-left ml-[20px] mr-[20%] '>
        <p>Original Name: {food.originalname}</p>
        <p>Name: {food.name}</p>
        <p>Price ${food.price}</p>
        <p>Location: {food.location}</p>
        <p className='overflow-wrap: break-word'>
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
  )
}

export default FoodDetails
