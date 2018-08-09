import React from 'react';
import { shallow, configure } from 'enzyme';
import { StackForm } from './StackForm';
import { stackform as testdata } from '../data/testdata';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });



describe('StackForm', ()=>{
  const stackForm = shallow(<StackForm />);
  test('render the title of the page',()=>{expect(stackForm.find('h1').text()).toEqual('Create a New Stack');});
  test('render the title of new stack',()=>{expect(stackForm.find('label').text()).toEqual('Title : ');});
  test('renders context on the link for going home', ()=>{expect(stackForm.find('Link').at(0).props().children).toEqual('Home');});
  test('renders link to direct to different route', ()=>{expect(stackForm.find('Link').at(0).props().to).toEqual('/');});
  test('renders the button text', ()=>{expect(stackForm.find('button').at(0).text()).toEqual('Add Card');});
  test('renders the button text', ()=>{expect(stackForm.find('button').at(1).text()).toEqual('Remove Card');});
  test('renders context on the link for saving component', ()=>{expect(stackForm.find('Link').at(1).props().children).toEqual('Save and Add Stack');});

  describe('Click Add Button', ()=>{
    beforeEach(()=>{stackForm.find('button').at(0).simulate('click');});
    afterEach(()=>{stackForm.find('button').at(1).simulate('click');});
    test('render prompt field component', ()=>{expect(stackForm.find('label').at(1).text()).toEqual('Prompt : ');});
    test('render answer field component', ()=>{expect(stackForm.find('label').at(2).text()).toEqual('Answer : ');});
    test('new card base on the state', ()=>{expect(stackForm.state().cards.length).toEqual(1);});

    describe('and updating the input text field', ()=>{
      beforeEach(()=>{
        stackForm.find('input').at(0).simulate('change', {target:{ value: testdata.title }});
        stackForm.find('input').at(1).simulate('change', {target:{ value: testdata.prompt }});
        stackForm.find('input').at(2).simulate('change', {target:{ value: testdata.answer }});
      });
      test('update the text in title input field', ()=>{expect(stackForm.state().title).toEqual(testdata.title);});
      test('update the text in prompt input field', ()=>{expect(stackForm.state().cards[0]['prompt']).toEqual(testdata['prompt']);});
      test('update the text in answer input field', ()=>{expect(stackForm.state().cards[0]['answer']).toEqual(testdata['answer']);});
    });
  });
});
