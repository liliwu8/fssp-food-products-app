import { Link } from 'react-router-dom'

function Food({ image, id, name, country, city }) {
  console.log(image)
  return (
    <div className='bg-white p-[20px] shadow-2xl hover:shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] hover:scale-110'>
      <Link to={`/foods/${id}`}>
        <img src={image} alt='food pic' className='w-[300px] h-[200px]' />
        <div>
          <p>
            {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{city}, {country}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Food
