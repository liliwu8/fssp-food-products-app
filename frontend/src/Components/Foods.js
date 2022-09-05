import Food from '../Components/Food'
import { useEffect, useState } from 'react'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

function Foods() {
  const [food, setFood] = useState([])

  useEffect(() => {
    axios.get(`${API}/foods`).then((res) => {
      setFood(res.data.payload)
    })
  }, [])

  return (
    <div className='flex justify-center flex-wrap gap-8 animatecss animatecss-delay-1s  animatecss-fadeInUp '>
      {food.map((food, index) => {
        return (
          <Food
            key={index}
            id={food.id}
            image={food.image}
            name={food.name}
            location={food.location}
          />
        )
      })}
    </div>
  )
}

export default Foods
