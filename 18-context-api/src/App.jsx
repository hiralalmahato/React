// import React from 'react'
// import NavBar from './components/NavBar'
// import {useState} from 'react'

// function App() {
//   const [theme,setTheme] = useState('light')
//   return (
//     <div>
//       <h1>Theme is {theme}</h1>
//       <NavBar theme =  {theme} setTheme = {setTheme}/>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import NavBar from './components/NavBar'


function App() {
  const [theme,setTheme] = useState('light')
  return (
    <div>
      <NavBar theme={theme}/>
    </div>
  )
}

export default App