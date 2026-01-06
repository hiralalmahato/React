import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Product() {
  return (
    <div>
    <div className='flex justify-center items-center gap-6'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
    </div>
    
    <Outlet/>
    </div>
    
  )
}

export default Product