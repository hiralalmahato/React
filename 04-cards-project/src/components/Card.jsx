import React from 'react'
import {Bookmark} from 'lucide-react'
function Card(props) {
  return (
    <div className='card'>
       <div>
         <div className='top'>
         <img src ="data:image/png;base64,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" alt = ""/>
         <button>Save <Bookmark size={12}  /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2> {props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
       </div>
        <div className = "bottom">
          <div className='bottom2'>
              <h3>$120/hr</h3>
              <p>Jharkhand, India</p>
          </div>
            <button>Apply now</button>

        </div>

      </div>


    
  )
}

export default Card