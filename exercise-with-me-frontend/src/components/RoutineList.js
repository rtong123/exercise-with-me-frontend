import React from 'react'

const Routines = (props) => {
return (
  <div>
  Routines
  {props.routines.map(routine => <li key={routine.id}> {routine.title} </li> )}
)

  </div>
  )
}

export default Routines
