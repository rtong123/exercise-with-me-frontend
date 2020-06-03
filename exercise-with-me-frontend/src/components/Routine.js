//functional componenet

import React from 'react'

const Routine = (props) => {

console.log(props)
let routine = props.routines[(props.match.params.id)]
  return(
<div>
  routine
</div>
  )
}

export default Routine
