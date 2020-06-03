import React from 'react'
import Routines from '../components/RoutineList'
import Routine from '../components/Routine'
import RoutineForm from '../components/RoutineForm'
import {connect} from 'react-redux'
import {fetchRoutines} from '../actions/fetchRoutines'
import {Route} from 'react-router-dom'

class RoutinesContainer extends React.Component{
  componentDidMount(){
    this.props.fetchRoutines() //need to connect this to store --  gets all the accounts and updates the store
  }

  render(){
    return(
      <div>
      <Route path='/routines/new' component={RoutineForm}/>
      <Route path='/routines/:id' render={(routerProps) => <Routine {...routerProps} routine={this.props.routines}/>}/>
      <Route path='/routines' render={(routerProps) => <Routines {...routerProps} routines={this.props.routines}/>}/>
      //pass router props in addition to props being passed in
      <br></br>


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
