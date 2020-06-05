import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import ExerciseList from '../components/ExerciseList'


class ExercisesContainer extends React.Component{
  render(){
    return(
      <div>
      <ExerciseForm/>
      <ExerciseList exercises={this.props.routine && this.props.routine.exercises}/>

      </div>
    )
  }
}

export default ExercisesContainer
