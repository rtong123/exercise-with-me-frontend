//functional componenet

import React from 'react'

const Routine = (props) => {

let routine = props.routines[props.match.params.id - 1]
  return(
    <div>
      <b>Title: </b>{routine.title}
  <br></br>
  <b>Weight:</b> {routine.body_weight}
  <br></br>
  <b>Start Date:</b>{routine.start_date}
  <br></br>
  <b>Days:</b> {routine.days}
  <br></br>
  <br></br>
      </div>
  )
}

export default Routine
