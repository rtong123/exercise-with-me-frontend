import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'



const Routines = (props) => {


const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

return (
  <div>
    <h1>Exercise Routines</h1>
    <Button>
    {props.routines.map(routine =>
      <div key={routine.id}>
        <Link to={`/routines/${routine.id}`}>{routine.title}</Link>

     </div>)}
    </Button>



  </div>
  )
}

export default Routines
