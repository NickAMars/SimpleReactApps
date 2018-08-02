import React from 'react';
import  {mount, configure } from 'enzyme';
import App from './App';
// import '../setUpTest';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter(), disableLifecycleMethods: true });


describe('App', ()=>{
  let app= mount(<App />);
  test('render the app title', ()=>{
    // console.log(app.debug()); -- component
    // console.log(app.find('h1').text()); -- show part of component
    expect(app.find('h1').text()).toEqual('HELLO WORLD APPLICATION');
  });
  /*
  Test to see if text on button exist
  */
  test('render the the submit button', ()=>{
    expect(app.find('.btn').at(0).text()).toEqual('Submit');
  });
  test('render the the clear button', ()=>{
    expect(app.find('.btn').at(1).text()).toEqual('Clear');
  });

  /*
    Test to see if the input and button element exist
  */
  describe('see if the input and button field are there',()=>{
    test('input component exist', ()=> {
      expect(app.find('input').exists()).toBe(true);
    });
    test('render submit button', ()=> {
      expect(app.find('.btn').at(0).exists()).toBe(true);
    });
    test('render clear button', ()=> {
      expect(app.find('.btn').at(1).exists()).toBe(true);
    });
    describe('when create a note', ()=>{
      /*
      places test in the input field
      */
      let testName = 'test_name';
      beforeEach(()=> {
        app.find('input').simulate('change', {
          target:{ value: testName }
        });
      });
      test('update the text in state', ()=>{
        // console.log(app.state());
        expect(app.state().name).toEqual(testName);
      });

      describe('and submitting the new note', ()=>{
        /*
          The before block is called before every test
          case individually.

        */
        beforeEach(()=>{
          app.find('.btn').at(0).simulate('click');
        });

        /*
          The after block is called after every test
          case individually in a sequencial order
          use to reset the before case
        */
        afterEach(()=>{
          app.find('.btn').at(1).simulate('click');
        });
        /*
        Added a new item to the state
        */
        test('if add the new state', ()=>{
          expect(app.state().names[0].name).toEqual(testName);
        });

        describe('click the clear button', ()=>{
          beforeEach(() =>{
            app.find('.btn').at(1).simulate('click');
          });
          /*
            test when hit the clear button all element in
            the state goes away
           */
          test('clears the names in the state', () =>{
            expect(app.state().names).toEqual([]);
          });
        });
        /*
          this is a remounted version.
           when the page has been refresh
           and the cookies are stored in the state
        */
        describe('and remountin the component', () => {
          let app2;
          beforeEach(() => {
            app2 = mount(<App />);
          });

          test('reads the stored names cookies', ()=>{
          // console.log(app2.state());
          expect(app2.state().names).toEqual([{ name: testName }]);
          });
        });
      });

    });

  });


});
