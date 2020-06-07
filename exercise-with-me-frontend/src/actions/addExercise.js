export const addExercise = (exercise, routineId) => {

  return(dispatch) => {
    fetch(`http://localhost:3000/routines/${routineId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exercise)
    })
    .then(response => response.json())
    .then(exercise => dispatch({type: 'ADD_EXERCISE', payload: exercise}))
  }

}
