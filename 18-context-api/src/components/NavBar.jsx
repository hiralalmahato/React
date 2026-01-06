// import React from 'react'

// const NavBar = (props) => {
//   return (
//     <div>
      
//       <button onClick={()=>{
//         props.setTheme('dark')
//       }}>Change Theme</button>
//     </div>
//   )
// }

// export default NavBar

import { useContext } from 'react'

import React from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const NavBar = (props) => {

  const data = useContext(ThemeDataContext)
  console.log(data)
  return (
    <div className='flex justify-between m-4 items-center bg-cyan-900 text-white'>
      <h2 className='font-bold'>{data}</h2>
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default NavBar