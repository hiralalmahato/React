import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Product from './pages/Product'
import Women from './pages/Women'
import Courses from './pages/Courses'
import Coursedetails from './pages/Coursedetails'

function App() {
  return (
    <div className='bg-black text-white h-screen'>
      <NavBar/>

      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/courses" element={<Courses/>}/>
        <Route path = "/courses/:id" element={<Coursedetails/>}/>
        <Route path = '*' element={<NotFound/>}/>
        <Route path = '/product' element={<Product/>}>
          <Route path = 'men' element={<Men/>}/>
          <Route path = 'women' element={<Women/>}/>
        </Route>
        
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App