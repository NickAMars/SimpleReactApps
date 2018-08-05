import React , {Component} from 'react';
import { connect } from 'react-redux';
import _stacks from '../data/stack.json';
import {Link} from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

class StackList extends Component{
  componentDidMount() {
    if(this.props.stacks.length === 0 )this.props.loadStacks(_stacks);

  }
  render(){
    /*
    test if our function was binded
    console.log('stacklist props', this.props);
    */
    // console.log(this.props);
    const {stacks} = this.props;
    return (
      <div className="topics">
        <ul className="topics__list">
          {
            stacks.map( stack =>{
                return(
                  <li className="topics__item"  key={stack.id}>
                      <Link  className="topics__link"
                       to="/stack"
                       onClick={()=>this.props.setStack(stack)}
                       >
                        { stack.title }
                      </Link>
                  </li>
                )
              })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    stacks: state.stacks
  };
}


export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
