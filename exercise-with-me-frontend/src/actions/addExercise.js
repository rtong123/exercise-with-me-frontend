export const addExercise = (exercise, routineId) => {

  return(dispatch) => {
    console.log(exercise,routineId)
    fetch(`http://localhost:3000/routines/${routineId}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({exercise: exercise,
            routine_id: routineId,
          })

    })
    .then(response => response.json())
    .then(exercise => dispatch({type: 'ADD_EXERCISE', payload: exercise}))
  }

}
