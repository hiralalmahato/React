import React from 'react'
import {useState} from 'react'

function App() {

  const[title,setTitle] = useState("")
  const submitHandler=(e)=>{
        e.preventDefault()
        console.log("form Submitted by",title);
        setTitle('')                //form blank ho jayega
  }

  return (
    <div className='p-6 '>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex gap-4'>

            <input  type = "text" 
            placeholder = "Enter your name"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)

            }}
            className='border-2 rounded-lg text-3xl'/>
            <button className='text-3xl border-2 rounded-lg bg-blue-500 text-white font-medium px-6 py-1'>Submit</button>
        </form>
    </div>
  )
}

export default App