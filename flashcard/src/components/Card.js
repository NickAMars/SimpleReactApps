import React, { Component } from 'react';

class Card extends Component{
  constructor(){
    super();
    this.state= { reveal: false };
  }

  // ternary
  render(){
    const { prompt, answer } = this.props.card;
    return (
      <div className="stack" onClick={() => {
        if(this.state.reveal === false){
          this.setState( {reveal:true} )
        }else{
          this.setState( {reveal:false} );
        }
      }}>
        <div className="stack__prompt"><h4>{prompt}</h4></div>
        <div className="stack__answer"><h4 className={this.state.reveal? 'text-reveal':'text-hidden'}>{answer}</h4></div>
      </div>
    )
  }
}

export default Card;
