import React from 'react'

class RoutineForm extends React.Component{

  render(){
    return(
      <div>
        <form>
        <label>Title:</label>
        <input type='text'/><br></br>
          <label>Body Weight:</label>
          <input type='text'/><br></br>
            <label>Start Date:</label>
            <input type='text'/><br></br>
              <label>Days:</label>
              <input type='text'/><br></br>
        </form>
      </div>
    )
  }

}

export default RoutineForm
