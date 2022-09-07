// import world from './World Cusine.png'

import axios from 'axios'
import { useEffect, useState} from 'react'
const API = process.env.REACT_APP_API_URL
// import giphy from './giphy.gif'
function Home() {
  const [food, setFood] = useState([])

  useEffect(() => {
    axios.get(`${API}/foods`).then((res) => {
      setFood(res.data.payload)
    })
  }, [])

  
  return (
    <div>
      <h2 className='animatecss animatecss-flipInX animatecss-delay-1s  text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[3%]'>
        Welcome To World cuisine !
      </h2>

      {/* <img src={giphy} className='background-color-blue-500' /> */}

      
    </div>
  )
}
export default Home
