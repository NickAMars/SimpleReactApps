import React from 'react';
import { shallow, configure } from 'enzyme';
import {Stack} from './Stack';
import { props } from '../data/testdata';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });


/*
export Stack class fixed the store variable by inporting one class
const props - fixies issue of undefied because we are expecting props variable to be passed in stack component
console.log(stack.debug());
console.log(stack.find('Card').length);
*/

describe('Stack', ()=>{
  const stack = shallow(<Stack {...props}/>);
 test('render the title', () => {
   expect(stack.find('h1').text()).toEqual(props.stack.title);
 });
 test('renders link to direct to different route', ()=>{
   expect(stack.find('Link').props().to).toEqual('/');
 });
 test('renders link text test', ()=>{
   expect(stack.find('Link').props().children).toEqual('Home');
 });
 test('redners the current number of cards', () =>{
   expect(stack.find('Card').length).toEqual(props.stack.cards.length);
 });

})
