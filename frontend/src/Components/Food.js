import { Link } from 'react-router-dom'

function Food({ image, id, name, country, city, index }) {
  console.log(image)
  return (
    <div>
      <Link to={`/foods/${id}`}>
        <img src={image} alt='food pic' width='300px' height='200px' />
        <p>
          {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{city},{country}
        </p>
      </Link>
    </div>
  )
}

export default Food
