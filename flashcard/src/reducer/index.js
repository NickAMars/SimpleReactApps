import { combineReducers } from 'redux';

/*get reducers */
import  stack  from './setStack';
import  stacks  from './setStacks';

const rootReducer = combineReducers({
  stack,
  stacks
});

export default rootReducer;
