import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      inro:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      inro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      inro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>

    </div>
  )
}

export default App