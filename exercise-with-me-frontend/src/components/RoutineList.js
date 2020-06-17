import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'



const Routines = (props) => {

  const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

return (
  <div>
    <h1>Exercise Routines</h1>
    {props.routines.map(routine =>
      <div key={routine.id}>
        <StyledLink><Link to={`/routines/${routine.id}`}>{routine.title}</Link></StyledLink>
     </div>)}



  </div>
  )
}

export default Routines
