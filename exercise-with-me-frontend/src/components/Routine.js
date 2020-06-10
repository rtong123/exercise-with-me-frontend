
import React from 'react'
import ExercisesContainer from '../containers/ExercisesContainer'
import ExerciseForm from './ExerciseForm'
import {Route,Link} from 'react-router-dom'




const Routine = (props) => {

let routine = props.routines[props.match.params.id - 1]



  return(
    <div>
      <h1>Routine {props.match.params.id}</h1>
        <b>Routine Title:</b> {routine ? routine.title : null} <br></br>
         <b>Body Weight:</b> {routine ? routine.body_weight : null} <br></br>
         <b> Start Date: </b> {routine ? routine.start_date : null} <br></br>
         <b> Days: </b> {routine ? routine.days : null}<br></br>
         <br></br>


        <ExercisesContainer routine={routine}/>
        <ExerciseForm routine={routine}/>  <button>Delete Routine</button>

    </div>
    )
  }

export default Routine
