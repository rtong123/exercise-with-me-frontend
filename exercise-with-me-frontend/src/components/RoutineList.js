import React from 'react'

const Routines = (props) => {
  console.log(props)
return (
  <div>
  Routines
  {props.routines.map(routine =>
    <li key={routine.id}>
    Title: {routine.title}
    <br></br>
    Weight: {routine.body_weight}
    <br></br>
    Start Date: {routine.start_date}
    <br></br>
    Days: {routine.days}
    <br></br>
    <br></br></li>
    )}


  </div>
  )
}

export default Routines
