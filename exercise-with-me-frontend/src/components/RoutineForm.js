import React from 'react'
import {connect} from 'react-redux'
import {addRoutine} from '../actions/addRoutine'

class RoutineForm extends React.Component{

  state = {
    title:'',
    body_weight:'',
    start_date:'',
    days:''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRoutine(this.state)
    this.setState({
      title: '',
      body_weight: '',
      start_date: '',
      days: ''
    })
  }

  render(){
    return(
      <div>
        <h1>Routine Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type='text' value={this.state.title} name="title" onChange={this.handleChange}/><br></br>
          <label>Body Weight: (in lbs)</label>
          <input type='text' value={this.state.body_weight} name="body_weight" onChange={this.handleChange}/><br></br>
          <label>Start Date:</label>
          <input type='text' placeholder='MM/DD/YYYY' value={this.state.start_date} name="start_date" onChange={this.handleChange}/><br></br>
          <label>Days:</label>
          <input type='text' value={this.state.days} name="days" onChange={this.handleChange}/><br></br>
          <input type='submit'></input>
        </form>
      </div>
    )
  }

}

export default connect(null, {addRoutine}) (RoutineForm)
//look at thunk for addaccount connect - calling dispatch on return action
