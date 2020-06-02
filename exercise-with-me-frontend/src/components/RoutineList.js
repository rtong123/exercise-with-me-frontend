import React from 'react'
import Routine from './Routine'

const Routines = (props) => {
  console.log(props)
return (
  <div>
    <h1>Exercise Routines</h1>
  {props.routines.map(routine =>
    <div key={routine.id}> <Routine routine={routine}/></div>
    )}


  </div>
  )
}

export default Routines
