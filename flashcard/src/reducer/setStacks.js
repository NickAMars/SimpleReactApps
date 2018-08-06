import { LOAD_STACKS, ADD_STACK } from '../actions';


/*
accepts an array of object

return new state for the
stacks in or combineReducers

states: states
*/
export default  function (state=[], action) {
      // console.log(state);
  switch(action.type){
    case LOAD_STACKS:
    return action.payload;
    case ADD_STACK:
    // console.log(action.payload);
    return [...state, {...action.payload, id: state.length }];
    default:
    return state;
  }
}
