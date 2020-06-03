//functional componenet

import React from 'react'

const Routine = (props) => {

console.log(props)

let routine = props.routines[props.match.params.id - 1]


  return(
    <div>
        <b>Routine Title:</b> {routine ? routine.title : null} <br></br>
         <b>Body Weight:</b> {routine ? routine.body_weight : null} <br></br>
         <b> Start Date: </b> {routine ? routine.date : null} <br></br>
         <b> Days: </b> {routine ? routine.days : null}<br></br>

    </div>
    )
  }

export default Routine
