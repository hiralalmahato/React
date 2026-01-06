import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate();

  const btnClicked = ()=>{
    navigate('/')
  }
  return (

    
    <div>
      <button onClick={btnClicked} className='bg-emerald-700 m-4 rounded py-1 active:scale-95'>Return to Home Page</button>
      <h1 className='h-screen justify-center items-center flex'>About</h1>
    </div>
  )
}

export default About