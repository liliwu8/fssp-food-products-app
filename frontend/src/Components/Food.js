import { Link } from 'react-router-dom'

function Food({ image, id, name, location }) {
  return (
    <div className='bg-white p-[20px] drop-shadow-2xl hover:shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] hover:scale-110'>
      <Link to={`/foods/${id}`}>
        <img src={image} alt='food pic' className='w-[300px] h-[200px]' />
        <div className='flex justify-center'>
          <p className='font-bold'>
            {name}&nbsp;&nbsp;&nbsp;&nbsp;{location}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Food
