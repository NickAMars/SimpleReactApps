import React from 'react';
import { shallow, configure } from 'enzyme';
import  Card  from './Card';
import { propscard as props } from '../data/testdata';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Card', ()=>{
  const card = shallow(<Card  {...props} />);
  test('render card prompt',()=>expect(card.find('h4').first().text()).toEqual(props.card.prompt));
  test('render card answer',()=>expect(card.find('h4').last().text()).toEqual(props.card.answer));
  test('initial state of the reveal state',()=>expect(card.state().reveal).toBe(false));
  test('inital class of answer', ()=>expect(card.find('h4').at(1).hasClass('text-hidden')).toBe(true));

  describe('When a card click', ()=>{
    beforeEach(()=> card.simulate('click'));
    afterEach(()=> card.simulate('click'));
    test('update the reveal state', ()=> expect(card.state().reveal).toBe(true));
    test('update the class of answer', ()=> expect(card.find('h4').at(1).hasClass('text-reveal')).toBe(true));
  });
});
