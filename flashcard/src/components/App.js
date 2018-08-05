import React, { Component } from 'react';
import StackList from './StackList';


class App extends Component {

  getStack(stack){
      console.log(stack);
  }

  render(){
    return (
      <div>
        <h1 className="flash__header">FlashCard Pro</h1>
           < StackList  />

      </div>
    )
  }
}

export default App;
