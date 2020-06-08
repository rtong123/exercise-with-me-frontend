import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import ExerciseList from '../components/ExerciseList'
import {Route} from 'react-router-dom'



class ExercisesContainer extends React.Component{

  render(){

    return(
      <div>
      <ExerciseList exercises={this.props.routine && this.props.routine.exercises}/>
      <ExerciseForm routine={this.props.routine}/>
      <Route path='/exercises/new' component={ExerciseForm}/>
      <Route path='/exercises' component={ExerciseList}/>
      </div>
    )
  }
}

export default ExercisesContainer
