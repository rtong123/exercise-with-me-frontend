import React from 'react'
import {connect} from 'react-redux'
import {deleteExercise} from '../actions/deleteExercise'

const Exercises = (props) => {

const handleDelete = () => {
props.deleteExercise()
}

  return(
    <div id="exercises">


      {props.exercises && props.exercises.map(exercise =>

        <li key={exercise.id}>
          <b>Exercise Name:</b>{exercise.name} <br></br>
          <b>Exercise Equipment:</b>{exercise.equipment} <br></br>
          <b>Exercise Sets:</b>{exercise.sets} <br></br>
          <b>Exercise Reps:</b>{exercise.reps} <br></br>
          <br></br>
            <button onClick={props.deleteExercise}> Delete Exercise</button>
         </li>
       )}
    </div>
  )
}

export default connect(null, {deleteExercise})(Exercises)
