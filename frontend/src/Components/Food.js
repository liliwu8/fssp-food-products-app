import { Link } from 'react-router-dom'

function Food({ image, id, name, country, city,index }) {
  console.log(image)
  return (
    <div>
      <Link to={`/foods/${id}`}>
        <img src={image} alt='food pic' width='200px' height='120px' />
        <p>{name}</p>
        <p>{city}</p>
        <p>{country}</p>
      </Link>
    </div>
  )
}

export default Food
