import React from  'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
const test = () =>{
  return (
    <div>Testing route</div>
  );
}
/* switch try to march the first one so do it from top to bottom*/

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/test' component={test} />
          <Route path='/stack/new' component={StackForm} />
          <Route path='/stack' component={Stack} />
          <Route path='/' component= {App} />
        </Switch>
      </Router>
    </Provider>
  , document.getElementById('root'));
