import React from 'react'
import { ArrowRight } from 'lucide-react';

function RightCard(props) {
  return (
    <div className='h-full  shrink-0 w-80 bg-red-500 overflow-hidden relative rounded-4xl'>
        <img  className="h-full w-full object-cover " src ={props.img} alt=""/>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full text-2xl font-semibold h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div >
                <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium eos, perferendis maxime architecto accusamus.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2   rounded-full'> <ArrowRight size={15} /></button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard