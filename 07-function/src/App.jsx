import React from 'react'

function App() {

  function inputChanging(val){
    console.log(val)
  }
  return (
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type = 'text' placeholder='Enter Name' className='p-20'/>
    </div>
  )
}

export default App