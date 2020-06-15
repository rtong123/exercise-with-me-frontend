export default function routineReducer(state = {routines:[]}, action){

  switch(action.type){
    case 'FETCH_ROUTINES':

      return {
      routines: action.payload
      //returns state and returns array that points in the fetch request
    }

    case 'FETCH_EXERCISES':
    return{
      routines: action.payload
    }

    case 'ADD_ROUTINE':
      return{
        ...state,
        routines: [...state.routines, action.payload]}


    case 'ADD_EXERCISE':
    //find id  then add to routine id

    return{...state, routines: state.routines.map(routine => {
      if (routine.id === action.payload.routine_id) {

        routine.exercises = [...routine.exercises,action.payload]
        return routine
      }
      else{
        return routine
      }
    })
    }

    case 'DELETE_EXERCISE':
    //delete the exercise from the routine
    // return{...state, routines: state.routines.map(routine => {
    //   // if (routine.id === action.payload.routine_id) {
    //   //   routine.exercises = [...routine.exercises,action.payload]
    //   //   return routine
    //   // }
    //   // else{
    //   //   return routine
    //   // }
    //
    // })
    return {
      routines: [...state.routines.filter(routine => routine.id !== action.payload.routineId)]
    }

    // match exercise id --> adn get it out of routines.
    // }


      default:
        return state
      }
}
