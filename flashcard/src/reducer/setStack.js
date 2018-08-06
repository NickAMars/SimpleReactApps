import { SET_STACK } from '../actions';

/*
use to get a single object from an array of data

return new state for the
stack in or combineReducers
  state: state
*/

export default  function (state={}, action) {

  switch(action.type){
    case SET_STACK:
    return action.payload;
    default:
    return state;
  }
}
