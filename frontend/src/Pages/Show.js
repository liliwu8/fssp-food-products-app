import FoodDetails from '../Components/FoodDetails'

function Show({ addCart }) {
  return (
    <div className='Show'>
      <h2 className='text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[2%]'>
        Show Dish
      </h2>
      <FoodDetails addCart={addCart} />
    </div>
  )
}

export default Show
