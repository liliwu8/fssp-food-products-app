import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>
        <Link to='/foods'>Dish</Link>
      </h1>
      <h1>
        <Link to='/foods/new'>New Dish</Link>
      </h1>
    </div>
  )
}

export default NavBar
