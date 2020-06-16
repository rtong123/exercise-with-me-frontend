
import React from 'react'
import ExercisesContainer from '../containers/ExercisesContainer'
import ExerciseForm from './ExerciseForm'
import {Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRoutine} from '../actions/deleteRoutine'




const Routine = (props) => {
//its UNDEFINED!!!!!!
let routine = props.routines.find(element => element.id == props.match.params.id)
console.log(routine)



const handleDelete = (routineId) => {
props.deleteRoutine(routineId)
props.history.push('/routines')
}

  return(
    <div>
      // <h1>Routine {props.match.params.id}</h1>
        <b>Routine Title:</b> {routine ? routine.title : null} <br></br>
         <b>Body Weight:</b> {routine ? routine.body_weight : null} lbs <br></br>
         <b> Start Date: </b> {routine ? routine.start_date : null} <br></br>
         <b> Days: </b> {routine ? routine.days : null}<br></br>
         <br></br>


        <ExercisesContainer routine={routine}/>

        <ExerciseForm routine={routine}/> <button onClick={() => handleDelete(routine.id)}>Delete Routine</button>

    </div>
    )
  }

export default connect(null,{deleteRoutine})(Routine)
