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
    //find id  then add to routine id
    return{...state, routines: state.routines.map(routine => {
      if (routine.id === action.payload.id) {
        return action.payload
      }
      else{
        return routine
      }
    })

    }

      default:
        return state
      }
}
