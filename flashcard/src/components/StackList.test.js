import React from 'react';
import { shallow, configure } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/testdata';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });


const props= { stacks };

describe('StackList', ()=>{
  const stackList = shallow(<StackList {...props}/>);
  test('render Link to stack component', ()=>{
    // console.log(stackList.debug());
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
});
