import React from 'react'
import {connect} from 'react-redux'
import {deleteExercise} from '../actions/deleteExercise'

const Exercises = (props) => {

  const handleDelete = (routineId,exerciseId) => {
    props.deleteExercise(routineId,exerciseId)
  }

  console.log(props.exercises);

  return(
    <div id="exercises">
      {props.exercises && props.exercises.map(exercise =>

        <li key={exercise.id}>
          <b>Exercise Name:</b>{exercise.name} <br></br>
          <b>Type of Exercise:</b>{exercise.type_of_exercise} <br></br>
          <b>Exercise Equipment:</b>{exercise.equipment} <br></br>
          <b>Exercise Sets:</b>{exercise.sets} <br></br>
          <b>Exercise Reps:</b>{exercise.reps} <br></br>
          <br></br>
            <button onClick={() => handleDelete(exercise.routine_id,exercise.id)}> Delete Exercise</button>
         </li>
       )}
    </div>
  )
}

export default connect(null, {deleteExercise})(Exercises)
