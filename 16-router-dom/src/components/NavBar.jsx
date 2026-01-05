import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
   <div className='bg-red-500 flex justify-between text-white '>
        <h3 className='p-4 font-bold'>Mahato's Brand</h3>
        <div className='flex gap-6 p-4'>
            <Link to = '/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default NavBar