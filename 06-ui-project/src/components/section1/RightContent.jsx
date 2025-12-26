import React from 'react'
import RightCard from './RightCard'
import { ArrowRight } from 'lucide-react';

function RightContent(props) {
  return (
    <div className='h-full  rounded-4xl w-2/3 flex flex-nowrap gap-10 overflow-x-auto  p-6'>
     {props.users.map(function(elem,idx){
      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
     })}

    </div>
  )
}

export default RightContent