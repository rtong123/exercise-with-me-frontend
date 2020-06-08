import React from 'react'

const Exercises = (props) => {



  return(
    <div>
      {props.exercises && props.exercises.map(exercise =>
        <li key={exercise.id}>
          {exercise.name}
          {exercise.equipment}
          {exercise.sets}
          {exercise.reps}
         </li>)}
    </div>
  )
}

export default Exercises
