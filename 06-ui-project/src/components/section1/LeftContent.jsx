import React from 'react'
import { MoveUpRight } from 'lucide-react';

function LeftContent() {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
      <div className='p-6'>
        <h3 className=' text-7xl font-bold mb-7'>Prospective <br/><span>customer</span><br/> segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur amet, nulla ullam assumenda quia et expedita est minus</p>
      </div>
      <div className='text-8xl'>
         <MoveUpRight size={96} />

      </div>
    </div>
  )
}

export default LeftContent