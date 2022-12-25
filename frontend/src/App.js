import './App.css'
// import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
// import New from './Pages/New'
import Show from './Pages/Show'
import Login from './FireBase/Login'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Cart from './Components/Cart'
import SignUp from './FireBase/SignUp'
import SignOut from './FireBase/SignOut'
import Footer from './Pages/Footer'
import { useEffect, useState } from 'react'
import { CurrentUserContext } from './Components/CurrentUserContext'

//pass key, default
const cartInLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  const [cart, setCart] = useState(cartInLocalStorage)

  const [currentUser, setCurrentUser] = useState({})

  //run
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCart = (item) => {
    //finding the product then increase quanitiy
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
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar cart={cart} />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='/foods' element={<Index />} />
            {/* <Route path='/foods/new' element={<New />} /> */}
            <Route path='/foods/:foodId' element={<Show addCart={addCart} />} />
            {/* <Route path='/foods/:foodId/edit' element={<Edit />} /> */}
            <Route
              path='/cart'
              element={<Cart carts={cart} setCart={setCart} />}
            />
            <Route path='/signout' element={<SignOut />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
          <Footer/>
        </main>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
