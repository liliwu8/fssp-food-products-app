import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>
        <Link to='/foods'>Foods</Link>
      </h1>
      <h1>
        <Link to='/foods/new'>New Foods</Link>
      </h1>
    </div>
  )
}

export default NavBar
