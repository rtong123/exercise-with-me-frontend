import React from 'react'

const Exercises = (props) => {
console.log(props.exercises)

  return(
    <div>
      {props.exercises && props.exercises.map(exercise =>

        <li key={exercise.id}> {exercise.name} </li>)}
    </div>
  )
}

export default Exercises
