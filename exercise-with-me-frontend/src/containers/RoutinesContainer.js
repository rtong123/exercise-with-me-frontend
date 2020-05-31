import React from 'react'
import Routines from '../components/RoutineList'
import RoutineForm from '../components/RoutineForm'
import {connect} from 'react-redux'
import {fetchRoutines} from '../actions/fetchRoutines'

class RoutinesContainer extends React.Component{
  componentDidMount(){
    this.props.fetchRoutines() //need to connect this to store
  }

  render(){
    return(
      <div>
      <Routines routines={this.props.routines}/>
      <br></br>
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

export default connect(mapStateToProps, {fetchRoutines})(RoutinesContainer)

//map dispatch to props -- connect fetchroutines to store
