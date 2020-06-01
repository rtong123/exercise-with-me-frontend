import React from 'react'

const Routines = (props) => {
  console.log(props)
return (
  <div>
    <h1>Exercise Routines</h1>
  {props.routines.map(routine =>
    <li key={routine.id}>
    <b>Title: </b>{routine.title}
    <br></br>
    <b>Weight:</b> {routine.body_weight}
    <br></br>
    <b>Start Date:</b>{routine.start_date}
    <br></br>
    <b>Days:</b> {routine.days}
    <br></br>
    <br></br></li>
    )}


  </div>
  )
}

export default Routines
