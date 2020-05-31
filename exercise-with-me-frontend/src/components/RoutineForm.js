import React from 'react'

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

  render(){
    return(
      <div>
        <form>
          <label>Title:</label>
          <input type='text' value={this.state.title} name="title" onChange={this.handleChange}/><br></br>
          <label>Body Weight:</label>
          <input type='text' value={this.state.body_weight} name="body_weight" onChange={this.handleChange}/><br></br>
          <label>Start Date:</label>
          <input type='text' value={this.state.start_date} name="start_date" onChange={this.handleChange}/><br></br>
          <label>Days:</label>
          <input type='text' value={this.state.days} name="days" onChange={this.handleChange}/><br></br>
        </form>
      </div>
    )
  }

}

export default RoutineForm
