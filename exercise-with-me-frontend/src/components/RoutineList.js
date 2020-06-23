import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'



class RoutineList extends React.Component{

 //  let button = styled.button`
 //   background: transparent;
 //   border-radius: 4px;
 //   border: 2px solid palevioletred;
 //   color: palevioletred;
 //   margin: 0 1em;
 //   padding: 0.25em 1em;
 // `;

 state = {
   vote: 0
 }

  handleVote = (routineId) => {
    //everytime a user clicks vote on a particular routine, set state +1
   console.log(routineId)
  this.props.routines.map(routine =>
    console.log(routine.id)

  )
   this.setState({
     vote: this.state.vote + 1
     
   })

 }



render(){

return (
  <div>
    <h1>Exercise Routines</h1>

    {this.props.routines.map(routine =>
      <div key={routine.id}>
        <Link to={`/routines/${routine.id}`}>{routine.title}</Link>

          <button type="button" onClick={ () => this.handleVote(routine.id)}> Vote</button>  {this.state.vote}

     </div>)}



  </div>
  )
  }
}

export default RoutineList
