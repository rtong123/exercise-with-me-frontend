export default function routineReducer(state = {routines:[]}, action){

  switch(action.type){
    case 'FETCH_ROUTINES':
      return {
      routines: action.payload
      //returns state and returns array that points in the fetch request
    }


    case 'ADD_ROUTINE':
      return{
        ...state,
        routines: [...state.routines, action.payload]}


    case 'ADD_EXERCISE':
    return {
      ...state,
      routines: state.routines.map(routine => {
        if (routine.id === action.payload.routine_id) {
          if (routine.exercises && routine.exercises.length > 0){
            routine.exercises.push(action.payload)
          }
          else {
            routine.exercises = [action.payload]
          }
        }
        return routine
      })
    }

    case 'DELETE_EXERCISE':
    //delete the exercise from the routine

    const routines =  state.routines.map(routine => {
      if (routine.id === action.payload.routineId){
        console.log(routine)
        routine.exercises = routine.exercises.filter(exercise => exercise.id !== action.payload.exerciseId)
        console.log(routine.exercises)
      }
      return routine
    })
    return {
      routines: [...state.routines,routines]
    }

    // match exercise id --> adn get it out of routines.
    // }


      default:
        return state
      }
}
