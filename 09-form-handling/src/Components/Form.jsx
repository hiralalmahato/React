// import React from 'react'

// function Form() {

//     const submitHandler=()=>{
        
//     }
//   return (
//     <div className='p-6 '>
//         <form onSubmit={submitHandler} className='flex gap-4'>
//             <input type = "text" placeholder = "Enter your name" className='border-2 rounded-lg text-3xl'/>
//             <button className='text-3xl border-2 rounded-lg bg-blue-500 text-white font-medium px-6 py-1'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Form


import React from 'react'

function Form() {

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("form Submitted");
        
    }
  return (
    <div className='p-6 '>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex gap-4'>
            <input type = "text" placeholder = "Enter your name" className='border-2 rounded-lg text-3xl'/>
            <button className='text-3xl border-2 rounded-lg bg-blue-500 text-white font-medium px-6 py-1'>Submit</button>
        </form>
    </div>
  )
}


export default Form