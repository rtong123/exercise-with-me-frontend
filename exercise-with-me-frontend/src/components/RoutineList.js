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

handleVote = (event,routineId) => {
// if routine id matches the button
console.log(event.target.value)

  if (event.target.value == routineId){
    this.setState({
      vote: this.state.vote += 1
    })
  }
  else{
    console.log('nu')
  }
}



// this.setState({
//   vote: this.state.vote + 1
// })

render(){
  console.log(this.state.vote)
return (
  <div>
    <h1>Exercise Routines</h1>

    {this.props.routines.map(routine =>
      <div key={routine.id}>

        <Link to={`/routines/${routine.id}`}>{routine.title}</Link>
          <button type="button" onClick={ (e) => this.handleVote(e,routine.id) } value={routine.id}> Vote</button>  {this.state.vote}
     </div>)}


  </div>
  )
  }
}

export default RoutineList
