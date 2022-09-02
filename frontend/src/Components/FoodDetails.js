import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Review from './Review'

const API = process.env.REACT_APP_API_URL

function FoodDetails() {
  const [food, setFood] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()
  let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

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

  return (
    <div className='mt-16 mx-auto px-2 lg:px-50 flex-grow h-full w-full'>
      <section className='h-full'>
        <article className=' overflow-hidden'>
          <div className='container px-5  mx-auto'>
            <div className=' lg:w-4/5 mx-auto flex flex-wrap'>
              <img
                src={food.image}
                alt='dishpic'
                className='lg:w-1/2 lg:h-1/2  object-contain md:object-cover object-center rounded'
              />
              <div className='lg:w-1/2 lg:pl-10 lg: lg:h-1/2 lg:mt-0 text-left leading-8 text-[18px]'>
                <p>
                  <strong>Original Name:</strong> {food.originalname}
                </p>
                <p>
                  <strong>Name:</strong> {food.name}
                </p>
                
                <p>
                  <strong>Price:</strong> {dollarUS.format(food.price)}
                </p>
                <p>
                  <strong>Location:</strong> {food.location}
                </p>
                <p className='pb-1'>
                  <strong>Ingredients:</strong> {food.ingredients}
                </p>
                <Link to={`/foods`}>
                  <button className='h-10 px-5 m-2 bg-[#DE5E39] text-white hover:bg-[#E87B35] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                    Back
                  </button>
                </Link>
                <Link to={`/foods/${id}/edit`}>
                  <button className='h-10 px-5 m-2 bg-[#DE5E39] text-white hover:bg-[#E87B35] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                    Edit
                  </button>
                </Link>
                <button
                  class='h-10 px-5 m-2 bg-[#C83E2D] text-white hover:bg-[#D65B4C] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
            {/* <Review/> */}
          </div>
        </article>
      </section>
    </div>
  )
}

export default FoodDetails
