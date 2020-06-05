//functional componenet

import React from 'react'

const Routine = (props) => {



let routine = props.routines[props.match.params.id - 1]


  return(
    <div>
      <h1>Routine {props.match.params.id}</h1>
        <b>Routine Title:</b> {routine ? routine.title : null} <br></br>
         <b>Body Weight:</b> {routine ? routine.body_weight : null} <br></br>
         <b> Start Date: </b> {routine ? routine.date : null} <br></br>
         <b> Days: </b> {routine ? routine.days : null}<br></br>
        <button>Update Routine</button> <button>Delete Routine</button>
    </div>
    )
  }

export default Routine
