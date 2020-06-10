import React from 'react'

const Exercises = (props) => {

const handleDelete = () => {

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
            <button> Delete Exercise</button>
         </li>
       )}
    </div>
  )
}

export default Exercises
