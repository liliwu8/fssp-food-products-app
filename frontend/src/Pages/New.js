import NewFoodForm from '../Components/NewFoodForm'

function New() {
  return (
    <div className='New'>
      <h2 className='text-3xl text-[#4D3B2A] font-bold uppercase mb-[2%] mt-[2%]'>
        Add a new Dish
      </h2>
      <NewFoodForm />
    </div>
  )
}

export default New
