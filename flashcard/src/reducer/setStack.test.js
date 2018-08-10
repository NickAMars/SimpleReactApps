import reducer from './index';
import { setStack, SET_STACK } from '../actions';
import { props }  from '../data/testdata';

/*
reducer({}, {})
1.   @param default state
2.   @param action object
*/
describe('setStack reducer', ()=>{
  test('sets the main stack', ()=>expect( reducer({}, {}) ).toEqual( {"stack": {}, "stacks": []} ));
  test('set the main stack reducer', () =>expect( reducer({},{type: SET_STACK, payload: props.stack})).toEqual({stack:props.stack, stacks: []}) );
});
