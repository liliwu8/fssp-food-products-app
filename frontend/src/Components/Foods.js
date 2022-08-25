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
    <div>
      <h1>All of the dish</h1>
      <div>
        {food.map((food,index) => {
          return (
            <Food
              key={index}
              id={food.id}
              image={food.image}
              name={food.name}
              country={food.country}
              city={food.city}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Foods
