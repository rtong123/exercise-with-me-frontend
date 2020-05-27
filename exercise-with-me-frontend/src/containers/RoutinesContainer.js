import React from 'react'
import Routines from '../components/RoutineList'
import RoutineForm from '../components/RoutineForm'
import {connect} from 'react-redux'
import {fetchRoutines} from '../actions/fetchRoutines'

class RoutinesContainer extends React.Component{
  componentDidMount(){
    fetchRoutines()
    // this.props.fetchRoutines()
  }

  render(){
    return(
      <div>
      <Routines/>
      <RoutineForm/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    routines: state.routines
  }
}

export default connect(null,mapStateToProps)(RoutinesContainer)
