import React from 'react'
import {useParams} from 'react-router-dom'

function Coursedetails() {

  const params = useParams();
  return (
    <div>{params.id} Course Details</div>
  )
}

export default Coursedetails