import React from 'react'

const Exercises = (props) => {



  return(
    <div>

      {props.exercises && props.exercises.map(exercise =>
        <li key={exercise.id}>

          <h1>Exercises for Routine {exercise.routine_id}</h1>
          <b>Exercise Name:</b>{exercise.name} <br></br>
          <b>Exercise Equipment:</b>{exercise.equipment} <br></br>
          <b>Exercise Sets:</b>{exercise.sets} <br></br>
          <b>Exercise Reps:</b>{exercise.reps} <br></br>
          <br></br>
         </li>
       )}
    </div>
  )
}

export default Exercises
