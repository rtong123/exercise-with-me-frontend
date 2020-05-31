export default function routineReducer(state = {routines:[]}, action){
  switch(action.type){
    case 'FETCH_ROUTINES':
      return {
      routines: action.payload
      //returns state and returns array that points in the fetch request
    }

      default:
        return state
    }

}
