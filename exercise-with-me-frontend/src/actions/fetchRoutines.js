export function fetchRoutines(){
  console.log('fetchRoutines')
  fetch('http://localhost:3000/routines')
  .then(response => response.json())
  .then(data => console.log(data))
}
