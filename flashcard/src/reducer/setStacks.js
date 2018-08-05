import { LOAD_STACKS } from '../actions';


/*
accepts an array of object

return new state for the
stacks in or combineReducers

states: states
*/
export default  function (state=[], action) {
  switch(action.type){
    case LOAD_STACKS:
    return action.payload;
    default:
    return state;
  }
}
