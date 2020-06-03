import React from 'react'
import Routine from './Routine'
import {Route} from 'react-router-dom'


const Routines = (props) => {

return (
  <div>
    <h1>Exercise Routines</h1>
    hi
   {props.routines.map(routine =>
     <div key={routine.id}> <Routine routine={routine}/></div>)}



  </div>
  )
}

export default Routines
