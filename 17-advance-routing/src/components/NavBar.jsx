import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex justify-between p-6 bg-cyan-900 '>
        <h2 className='font-bold'>Mahato's Brand</h2>
        <div className='flex gap-6 font-medium'>
          <Link to ='/'>Home</Link>
          <Link to ='/about'>About</Link> 
          <Link to ='/contact'>Contact</Link>
          <Link to ='/product'>Product</Link>
          <Link to ='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default NavBar