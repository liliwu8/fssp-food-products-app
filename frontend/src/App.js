import './App.css'
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
// import Map from './Components/Map'
import Cart from './Components/Cart'
import { useEffect, useState } from 'react'

function App() {
const cartStore = JSON.parse(localStorage.getItem('cart')) || '[]'
  const [cart, setCart] = useState(cartStore)

  useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
},[cart])
  
  const addCart = (item) => {
    let newCart = [...cart]
    let itemInCart = newCart.find((food) => food.name === item.name)

    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        ...item,
        quantity: 1,
      }
      newCart.push(itemInCart)
    }
    setCart(newCart)
  }

  return (
    <div className='App'>
      <NavBar cart={cart} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/foods' element={<Index />} />
          <Route path='/foods/new' element={<New />} />
          <Route path='/foods/:foodId' element={<Show addCart={addCart} />} />
          <Route path='/foods/:foodId/edit' element={<Edit />} />
          <Route path='*' element={<FourOFour />} />
          {/* <Route path='/map' element={<Map/>}/> */}
          <Route
            path='/cart'
            element={<Cart carts={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
