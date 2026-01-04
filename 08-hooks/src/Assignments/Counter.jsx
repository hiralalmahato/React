import React from 'react'
import {useState} from 'react';

function Counter() {

    const[num,setNum]  = useState(0);


    function increaseNum(){
        setNum(num+1);
    }

    function decreaseNum(){
        setNum(num-1);
    }

    function jump5(){
        setNum(num+5);
    }
  return (
    <div className='flex justify-center items-center flex-col bg-gray-800 py-4 m-6 rounded-full'>
        <div className='w-40 h-40 bg-red-500 mt-8 flex justify-center items-center rounded-full'>
        <h1 className=' text-7xl font-bold'>{num}</h1>
        </div>
        <div className='mt-4 flex gap-4'>
        <button className='bg-blue-600 px-6 py-2 rounded-lg text-white font-medium' onClick={increaseNum}>Increment</button>
        <button className='bg-green-600 px-6 py-2 rounded-lg text-white font-medium' onClick={decreaseNum}>Decrement</button>
        <button className='bg-pink-800 px-6 py-2 rounded-lg text-white font-medium' onClick={jump5}>Increasing by 5</button>
        </div>
    </div>
  )
}

export default Counter