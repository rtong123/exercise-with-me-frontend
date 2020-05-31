export const addRoutine = (data) => {
  return(dispatch) => {
    //gives us access to the dispatch function due to thunk
    fetch('http://localhost:3000/routines', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
  //able to add routine
}
