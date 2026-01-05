import React from 'react'
import axios from 'axios'
import {useState} from 'react'

function App() {
   //1. understanding fetch for calling api
  // async function getData(){
  //   const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   const data = await response.json()
  //   console.log(data)
  // }

  //2. understanding through axios i.e third party library

  // const getData =async()=>{
  //  const response= await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  //  console.log(response.data)
  // }


  //3.uderstanding axios through lorem api

  const [data,setData] = useState([])

  const getData=async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list")
    setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem,idx)=>{
          return <h3> {idx} Hello, {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App