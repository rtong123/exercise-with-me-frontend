import React from 'react'
import Routines from '../components/RoutineList'
import RoutineForm from '../components/RoutineForm'

class RoutinesContainer extends React.Component{
  render(){
    return(
      <div>
      <Routines/>
      <RoutineForm/>
      </div>
    )
  }




}

export default RoutinesContainer
