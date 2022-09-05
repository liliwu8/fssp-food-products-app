import { Link } from 'react-router-dom'
function FourOFour() {
  return (
    <div>
      <h1
        className='animatecss animatecss-flipInX animatecss-delay-1s
 text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[3%]'
      >
        Page Not found
      </h1>
      <br />
      <Link to='/foods'>
        <button className='h-10 px-3 m-2 bg-[#202053] text-white hover:bg-[#4040A6] font-bold uppercase text-md px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 '>
          back
        </button>
      </Link>
    </div>
  )
}

export default FourOFour
