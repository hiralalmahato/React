import React from 'react'
import {useState} from 'react';

function Destruc() {
    const[num,setNum] = useState({user:"Mahato",age:"21"})

    const btnClick=()=>{
        const newNum = {...num};
        newNum.user = 'Kumar';
        setNum(newNum);

    }



  return (
    <div >
        <h1>{num.user},{num.age}</h1>
        <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default Destruc