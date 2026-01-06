import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='flex p-4 gap-6'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        {props.theme}

    </div>
  )
}

export default Nav2