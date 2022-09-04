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
import Reviews from './Components/Reviews'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/foods' element={<Index />} />
          <Route path='/foods/new' element={<New />} />
          <Route path='/foods/:foodId' element={<Show />} />
          <Route path='/foods/:foodId/edit' element={<Edit />} />
          <Route path='*' element={<FourOFour />} />
          {/* <Route path='/map' element={<Map/>}/> */}
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
