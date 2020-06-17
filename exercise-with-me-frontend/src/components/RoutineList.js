import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'



const Routines = (props) => {

  const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 4px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

return (
  <div>
    <h1>Exercise Routines</h1>
    {props.routines.map(routine =>
      <div key={routine.id}>
        <Button><Link to={`/routines/${routine.id}`}>{routine.title}</Link> </Button>
     </div>)}



  </div>
  )
}

export default Routines
