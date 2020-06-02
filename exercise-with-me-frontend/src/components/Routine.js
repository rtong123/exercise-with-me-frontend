//functional componenet

import React from 'react'

const Routine = (props) => {

let routine = props.routines[props.match.params.id - 1]
  return(
<div>
  {routine ? routine.title : null}
</div>
  )
}

export default Routine
