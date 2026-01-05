import React from 'react'

function App() {

  const user = {
    username: "Mahato",
    age: 21,
    city: "Jamshedpur"
  }
  //if we pass the object in json format then it will print noting bcz
  //localStorage allow only string object 
  //so that why we use JSON.stringify
  //for reteiving the same data in json format we can use JSON.parse
  localStorage.setItem('user',JSON.stringify(user))
  const user1 = JSON.parse(localStorage.getItem('user'))


  console.log(user1)

  //localStorage.setItem({'key','value'})
  //localStorage.getItem('key')
  //localStorage.removeItem('key')
  //localStorage.clear
  return (
    <div>App</div>
  )
}

export default App