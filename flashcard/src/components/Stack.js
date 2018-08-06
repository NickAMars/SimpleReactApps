import  React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  Card from './Card';

class Stack extends Component{
  /*
  */
  render (){
     const  {title, cards} = this.props.stack;
    return (
      <div>
        <Link className="link_home" to='/'>Home</Link>
          <h1> {title}</h1>
          <br/>
          {
            cards.map(card=>

              <Card key={card.id} card={card} />
            )
          }
      </div>
    );
  }
}


/*
add arguements to this.props of the component.
which goes away when you reload the screen
*/
function mapStateToProps(state){
    return { stack: state.stack };
}

export default connect(mapStateToProps)(Stack);
