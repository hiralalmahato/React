import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react';

function App() {
  const [userdata,setUserData] = useState([])
  const [index,setIndex] = useState(1)

  const getData=async(idx)=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`)
    setUserData(response.data) 
    
   
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = "No data available"

  if(userdata.length > 0){
    printUserData  = userdata.map(function(elem,idx){
      return <div>
      <a href ={elem.url} >
        <div className='h-40 w-44 ' >
        <img src ={elem.download_url} alt="" className='h-full w-full object-cover'/>
      </div>
      <h2>{elem.author}</h2>

      </a>
      </div>
    })
  }


  return (
    <div className='bg-black h-screen overflow-auto text-white p-6'>
      <button onClick = {getData} className = "bg-red-500 px-6 py-2 rounded active:scale-95 mb-4">Get Data</button>
      <div className='flex flex-wrap gap-3'>{printUserData}</div>
      <div className='flex justify-center gap-6 items-center p-2'>
        <button onClick={()=>{
          if(index > 0){
            setIndex(index-1);
          }
        }} className='bg-amber-500 text-black px-5 py-1 font-medium active:scale-95 rounded'>Prev</button>

        <p className='text-gray-400 font-medium text-sm'>Page {index}</p>

        <button onClick={()=>{
          setIndex(index + 1)
        }} className='bg-amber-500 text-black px-5 py-1 font-medium active:scale-95 rounded'>Next</button>
      </div>

    </div>
  )
}

export default App