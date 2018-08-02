import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './sass/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import {mount} from 'enzyme';
// import Name from './Name';
//
// // describe block
// describe('Names', ()=> {
//   // let name = mount( <Name name={  { name: 'test'} }>);
//   it('render the note text', () => {
//     console.log('home');
//     //console.log(name.find('li').text())
//     //export(note.find('li').text()).toEqual('test')
//   });
//
//
// });
