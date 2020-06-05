import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'


const Routines = (props) => {

return (
  <div>
    <h1>Exercise Routines</h1>
    {props.routines.map(routine =>
      <div key={routine.id}> <Link to={`/routines/${routine.id}`}>{routine.title}</Link>
     </div>)}



  </div>
  )
}

export default Routines
