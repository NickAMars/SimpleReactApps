import reducer from './index';
import { ADD_STACK, LOAD_STACKS, loadStacks, addStack } from '../actions';
import { stacks, props }  from '../data/testdata';

/*
reducer({}, {})
1.   @param default state
2.   @param action object
*/
describe('setStack reducer', ()=>{
  test('sets the main stack', ()=>expect( reducer({}, {}) ).toEqual( {"stack": {}, "stacks": []} ));
  test('loads stack reducer', () => expect( reducer({},{type: LOAD_STACKS, payload: stacks})).toEqual({stack:{},  stacks}));
  test('add stack reducer', ()=> expect(reducer({},{type: ADD_STACK, payload: props.stack})).toEqual( {stack:{}, stacks: [props.stack]} ));
});
