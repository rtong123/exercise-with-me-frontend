import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'



class RoutineList extends React.Component{



 constructor(props){
   super(props);
   this.state = { routines: props.routines }
  }

  componentWillReceiveProps(props) {
    this.setState({
      routines: props.routines
    })
  }


 handleVote = (routineId) => {
   // if routine id matches the button
  const updatedRoutine = this.state.routines.map(routine => {
    if (routine.id == routineId) {
      if (routine.votes) {
          routine.votes += 1
      } else {
        routine.votes = 1
      }
    }
    return routine;
  })
  this.setState({
    routines: updatedRoutine
  })
}

  render(){
  console.log(this.state.routines)
    return (
      <div>
        <h1>Exercise Routines</h1>
        {this.state.routines.map(routine =>
          <div key={routine.id}>
            <Link to={`/routines/${routine.id}`}>{routine.title}</Link>
              <button type="button" onClick={() => this.handleVote(routine.id) } value={routine.id}>
                Vote
              </button>
              {routine.votes}
         </div>)}
      </div>
    )
  }
}

export default RoutineList
