import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex justify-between items-center bg-[#DD7B44] h-[100px] flex-wrap text-[50px] lg:shadow-lg'>
      <h1>
        <Link to='/'>Home</Link>
      </h1>
      <h1>
        <Link to='/foods'>Dish</Link>
      </h1>
      <h1>
        <Link to='/foods/new'>New Dish</Link>
      </h1>
      <h1>
        <Link to='/map'>Map</Link>
      </h1>
    </div>
  )
}

export default NavBar
