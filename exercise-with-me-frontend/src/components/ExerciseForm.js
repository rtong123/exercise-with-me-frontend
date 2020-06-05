import React from 'react';

class ExerciseForm extends React.Component{

  state = {
    name:'',
    type_of_exercise:'',
    equipment:'',
    sets:'',
    reps:''
  }

  render(){
    return(
      <div>
      <form>
        <h1>Exercise Form</h1>
        <label>Name</label>
        <input type='text' value={this.state.name} name="name"/><br></br>
        <label>Type of Exercise</label>
        <input type='text' value={this.state.type_of_exercise} name="type_of_exercise" onChange={this.handleChange}/><br></br>
        <label>Equipment</label>
        <input type='text' value={this.state.equipment} name="equipment" onChange={this.handleChange}/><br></br>
        <label>Reps</label>
        <input type='text' value={this.state.reps} name="reps" onChange={this.handleChange}/><br></br>
        <label>Sets</label>
        <input type='text' value={this.state.sets} name="sets" onChange={this.handleChange}/><br></br>
        //need to add hidden routine id
        <br></br>
        <input type='submit'></input>
      </form>
      </div>
    )
  }

}


export default ExerciseForm
