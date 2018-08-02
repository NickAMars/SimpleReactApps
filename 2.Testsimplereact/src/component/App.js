import React, { Component } from 'react';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
import Name from './Name';

const cookie_KEY = 'Secret';

class App extends Component {

  constructor(){
    super();
    this.state ={
      name: 'name',
      names: []
      }
  }

  componentDidMount(){
    this.setState( {names: read_cookie(cookie_KEY)} );
  }

  onSumbit(){
      const {name, names} = this.state;
      this.setState({name:''});
      names.push({name}); // place newname into the group
      this.setState({names}); // put it back into the state
      bake_cookie(cookie_KEY,this.state.names); // store the names
  }

  onClear(){
    delete_cookie(cookie_KEY);
    this.setState({names: []});
  }
  render(){
    return (
      <div>
        <h1 className="hello">HELLO WORLD APPLICATION</h1>
        <input className="input" type="text"
          // value={this.state.term}
         onChange= { event=>this.setState({name:event.target.value}) }
          value={this.state.name}
        />
        <button className="btn" onClick={this.onSumbit.bind(this)}>
          Submit
        </button>

        <button className="btn ml-sm" onClick={this.onClear.bind(this)}>
          Clear
        </button>

          <div className="container">
            <ul className="list">
            { /* create names */
                this.state.names.map((name,index)=>
                <Name key={index} name= {name}/>
              )
            }
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
