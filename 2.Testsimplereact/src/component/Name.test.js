import React from 'react';
import {mount, configure } from 'enzyme';
import Name from './Name';
// import '../setUpTest';
/*
use npm instal and yarn install wen ask to install jest-cli
jest-cli should alread be pre instal so
installing it would only create conflict

this is need to fix error,
Now i am free to work on my test

Lets begin Unit testing
*/
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });



const props = { name: {name: 'test'}};
describe('Name', ()=> {
   // let name = mount( <Name name={  { name: 'test'} } />);
   // let name = mount( <Name name={ props.name  } />);
   let name = mount( <Name { ...props }/>);
   // it or test
   it('renders the note text', ()=>{
     // console.log(name.debug());
     expect(name.find('li').text()).toEqual(props.name.name);
   });
});
