import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Cart({ carts, setCart }) {
  let navigate = useNavigate()
  let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const cartTotal = (carts) => {
    let sum = 0
    for (let cart of carts) {
      sum += cart.price * cart.quantity
    }
    return sum
  }

  const removeCart = (removefood) => {
    //if cart !== to the current food
    setCart(carts.filter((cart) => cart !== removefood))
  }

  const clearCart = () => {
    setCart([])
   navigate('/foods')
  }

  const checkOut = () => {
    setCart([])
    notify()
  }

  const notify = () => {
    toast.success('You have successfully logged in!', {
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
    })
    setTimeout(() => {
      navigate('/foods')
    }, 2000)
  }

  const cartItems = carts.map((food) => {
    return (
      <div className='mt-16 mx-auto px-2 lg:px-50 flex-grow h-full w-full ml-[1%]'>
        <section className='h-full'>
          <article className=' overflow-hidden'>
            <div className='container px-5 mx-auto'>
              <div className=' lg:w-4/5 mx-auto flex flex-wrap'>
                <img
                  src={food.image}
                  alt='dishpic'
                  className='lg:w-[40%] lg:h-[40%]  object-contain md:object-cover object-center rounded'
                  key={food.id}
                />
                <div className='lg:w-1/2 lg:pl-10 lg: lg:h-1/2 lg:mt-0 text-left leading-8 text-[18px]'>
                  <p>
                    <strong>Name:</strong> {food.name}
                  </p>
                  <p>
                    <strong>Price:</strong> {dollarUS.format(food.price)}
                  </p>
                  <p>
                    <strong>Location:</strong> {food.location}
                  </p>
                  <p>QTY: {food.quantity}</p>
                  <button
                    onClick={() => removeCart(food)}
                    className='h-10 px-5 m-2 bg-[#C83E2D] text-white hover:bg-[#D65B4C] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
        
      </div>
    )
  })

  return (
    <>
      {!carts.length ? (
        <h1 className='text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[2%]'>
          No Items In Cart
        </h1>
      ) : (
        <>
          <h1 className='text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[2%]'>
            Total: {dollarUS.format(cartTotal(carts))}
          </h1>
          {cartItems}
          <button
            onClick={() => checkOut()}
            className='h-10 px-5 m-2 bg-[#13348E] text-white hover:bg-[#1A48C6] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          >
            checkout
          </button>
          <button
            onClick={() => clearCart(carts)}
            className='h-10 px-5 m-2 bg-[#C83E2D] text-white hover:bg-[#D65B4C] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          >
            clearCart
          </button>
        </>
      )}
      <ToastContainer autoClose={2000} theme='light' />
    </>
  )
}

export default Cart
