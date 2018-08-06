import React from  'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

/*
creating redux store
*/
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from  'react-redux'; //listens for change in from store
const store = createStore(reducer);
/*
test case
import {setStack} from './actions';
// whenever store update this event happens
store.subscribe( () => console.log('store', store.getState()  ));
// update the store with displash
store.dispatch(setStack({ id:0, title: 'example', cards: [] }));
*/
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));


  /*
  width this functionality i have the power to create media queries in
  react by ising the width and the hieght of the screen.
  just need to be carefull not to use them in all my component
  */

  // componentDidMount(){
  //     window.addEventListener('resize', this.sizeUpdate);
  //     console.log(document.documentElement.clientWidth);
  //     console.log(document.documentElement.clientHeight);
  // }
  // sizeUpdate(){
  //   console.log(document.documentElement.clientWidth);
  // }
