import { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Favorite from './Pages/Favorite'
import AddToCart from './Pages/AddToCart'
import ProductDetail from './Pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          {/* NavigationBar */}
           <Navbar />

           {/* Routes of All Pages */}
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Products' element={<Products />} /> 
              <Route path='/About' element={<About />} /> 
              <Route path='/Contact' element={<Contact />} /> 
              <Route path='/Favorite' element={<Favorite />} /> 
              <Route path='/AddToCart' element={<AddToCart />} />
              <Route path='/ProductDetail' element={<ProductDetail />} />  
           </Routes>
    </>
  )
}

export default App
