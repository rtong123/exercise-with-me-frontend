//functional componenet

import React from 'react'

const Routine = (props) => {

console.log(props)
let routine = props.routines[props.match.params.id-1]
  return(
<div>
  routine
</div>
  )
}

export default Routine
