import React from 'react';
import { shallow, configure } from 'enzyme';
import Flash from './Flash';
import Adapter from 'enzyme-adapter-react-16';
/*
mount- not going to work (shallow render is use instead)
Throws error saying could not find "store"

find.debug() - allows you to see the component render
flash.find('Link').props()-
allows you to see all the properties of the link tag
 console.log(flash.find('Link').props());
*/

/*
*/

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Flash', () => {
  const flash= shallow(<Flash />);
  test('renders the title', ()=>{
    expect(flash.find('h1').text()).toEqual('FlashCard Pro');
  });
  test('renders link to direct to different route', ()=>{
    expect(flash.find('Link').props().to).toEqual('/stack/new');
  });
  test('renders link text test', ()=>{
    expect(flash.find('Link').props().children).toEqual('Create a New Stack');
  });
  test('redners the StackList', () =>{
    expect(flash.find('Connect(StackList)').exists()).toBe(true);
  });
});
