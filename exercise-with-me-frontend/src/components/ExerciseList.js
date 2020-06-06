import React from 'react'

const Exercises = (props) => {
console.log(props.exercises)

  return(
    <div>
      {props.exercises.map(exercise => exercise.title)}
    </div>
  )
}

export default Exercises
