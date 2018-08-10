import * as actions from './index';
import { props, stacks }  from '../data/testdata';

const STACKSET = {
  type: actions.SET_STACK,
  payload: props.stack
};
const STACKADD={
  type: actions.ADD_STACK,
  payload: stacks
};
const STACKSLOAD={
  type: actions.LOAD_STACKS,
  payload: stacks
};

describe('actions', ()=>{
  test('creates an action to set the main stack',()=>expect(actions.setStack(props.stack)).toEqual(STACKSET));
  test('creates an action to add  stack',()=>expect(actions.addStack(stacks)).toEqual(STACKADD));
  test('create an action to load stacks',()=>expect(actions.loadStacks(stacks)).toEqual(STACKSLOAD));
});
