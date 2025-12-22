import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
    <Card user='Mahato' age= {21} img='https://images.unsplash.com/photo-1764621005112-a65aa88abc5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    <Card user='Pramod' age= {24} img='https://images.unsplash.com/photo-1752468676919-863b1d440034?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App