import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div
        className='fixed inset-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1622115837997-90c89ae689f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        <span className='fixed inset-0 w-full h-full bg-black opacity-75'></span>
      </div>
      <h2 className='animatecss animatecss-flipInX animatecss-delay-1s text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[3%] dark:text-white'>
        Welcome To World cuisine !
      </h2>
      <p className='animatecss animatecss-flipInX animatecss-delay-1s text-3xl text-[#4D3B2A] font-bold dark:text-white'>
        Do you want to order food around the world and get it ship to your door
        ?
      </p>

      <br />
      <Link to='/foods'>
      <button
        className='relative
        mr-10
                border border-transparent
                bg-red-500
                px-10
                py-3
                rounded-full
                 hover:border-white
                 animatecss animatecss-flipInX animatecss-delay-1s 
                 mb-[22rem]
                '
      >
      Order now
        </button>
        </Link>  
    </div>
  );
}
export default Home;
