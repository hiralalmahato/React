import React from 'react'
import { useState } from 'react';

function App() {

  const[title,setTitle]= useState("")
  const[details,setDetails]= useState("")

  const[task,setTask] = useState([])
  


  const submitHandler=(e)=>{
    e.preventDefault();
    
    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    

    setTitle('')
    setDetails('')

  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }

  return (
    <div className='p-10 lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=' flex flex-col lg:w-1/2 items-start gap-4 m-4'>
        <h1 className='text-3xl font-bold'>Add Notes...</h1>
        
        {/* FIRST INPUT */}
        <input type="text" 
        placeholder='Enter Notes Heading'
        className="border-2 w-full px-6 py-2 rounded outline-none font-medium"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        

        {/* DETAILED INPUT */}
        <textarea type="text"
         placeholder='Writing Notes....'
         className='border-2 px-6 w-full py-2 h-20 rounded outline-none font-medium'
         value={details}
         onChange = {(e)=>{
          setDetails(e.target.value)
         }}
         />

         <button className='bg-blue-500 px-6 py-2 w-fit text-white font-medium rounded outline-none active:scale-95'>Add Notes</button>

        
         </form>
        
         <div className='p-10  lg:w-1/2 lg:border-l-2  gap-2'>
         <h1 className='text-3xl font-bold'>Recent Notes...</h1>
         <div className='flex flex-wrap gap-4 mt-5'>
           
           {task.map(function(elem,idx){
            return <div key={idx} className='h-52 w-40 rounded-xl bg-blue-500 p-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
              <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
              <p className='font-medium mt-2'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='mt-15 bg-red-500 text-white w-full font-medium rounded active:scale-95'>Delete</button>
            </div>


           })}
         </div>
         
         </div>
    </div>
  )
}

export default App