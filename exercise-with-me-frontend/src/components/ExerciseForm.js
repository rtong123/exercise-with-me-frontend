import React from 'react';

class ExerciseForm extends React.Component{

  render(){
    return(
      <div>
      <form>
        <h1>Exercise Form</h1>
        <label>Name</label>
        <input type='text' value={this.state.name} name="name"/><br></br>
        <label>Type of Exercise</label>
        <input type='text' value={this.state.body_weight} name="body_weight" onChange={this.handleChange}/><br></br>
        <label>Equipment</label>
        <input type='text' placeholder='MM/DD/YYYY' value={this.state.start_date} name="start_date" onChange={this.handleChange}/><br></br>
        <label>Reps</label>
        <input type='text' value={this.state.days} name="days" onChange={this.handleChange}/><br></br>
        <label>Sets</label>
        <input type='text' value={this.state.days} name="days" onChange={this.handleChange}/><br></br>
        //need to add hidden routine id
        <input type='submit'></input>

      </form>
      </div>
    )
  }

}


export default ExerciseForm
