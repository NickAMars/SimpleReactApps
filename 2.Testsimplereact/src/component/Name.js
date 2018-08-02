// import React from 'react';
//
// export default ({names}) =>{ // this.props.names
//   return  names.map((name, index)=>{ //return all list
//           return <li className="item" key={index}>
//                   {name.name}
//                  </li>;
//   });
// }
import React, {Component} from 'react';

class Name extends Component{
  render(){
    return <li className="item">{this.props.name.name}</li>;
  }
}

export default Name;
