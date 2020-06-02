//functional componenet

import React from 'react'

const Routine = (props) => {


  return(
    <div>
    <b>Title: </b>{props.routine.title}
    <br></br>
    <b>Weight:</b> {props.routine.body_weight}
    <br></br>
    <b>Start Date:</b>{props.routine.start_date}
    <br></br>
    <b>Days:</b> {props.routine.days}
    <br></br>
    <br></br>
    </div>
  )
}

export default Routine
