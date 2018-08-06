import React, {Component} from  'react';
import Flash from './Flash';
import Stack from './Stack';
import StackForm from './StackForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const test = () =>{
  return (
    <div>Testing route</div>
  );
}


class App extends Component{

/* switch try to march the first one so do it from top to bottom*/
  render(){
    return(
        <Router>
          <Switch>
            <Route path='/test' component={test} />
            <Route path='/stack/new' component={StackForm} />
            <Route path='/stack' component={Stack} />
            <Route path='/' component= {Flash} />
          </Switch>
        </Router>
      )
    };
}
export default App;
