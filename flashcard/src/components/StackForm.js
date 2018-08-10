import React, { Component } from  'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {addStack} from '../actions';
// import MediaQuery from 'react-responsive';

export class StackForm extends Component{
  constructor(){
    super();
    this.state = {
      title: 'title',
      cards: []
    }
  }

  addCard(){
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: '', answer: ''});
    this.setState({ cards });
  }
  removeCard(){

    const { cards } = this.state;
    if(cards.length === 0) return ;
    cards.pop();
    this.setState({ cards });
  }

  updateCardPrompt(event, index, type){
    const { cards } = this.state;
    cards[index][type] = event.target.value;
    this.setState({ cards });
  }

  addStack(){
    if(this.state.cards.length === 0) return;;
    this.props.addStack(this.state);
  }

  render( ){
    // console.log('State', this.state);
      // console.log(this.state);
    return (
      <div>
        <Link to='/' className="link_home">Home</Link>
        <h1>Create a New Stack</h1>
        <br/>
        <div className="form__title">
          <label className="form__label" >Title : </label>
          <div className="form__title-box">
            <input type="text"
             className="form__title-input"
              onChange={(event)=>{ this.setState({title: event.target.value }) }}
               value={this.state.title} />
          </div>
        </div>
        {
          this.state.cards.map((card, index )=>{
            return (
              <div key={card.id} className='form'>
                <br/>

                <div className="form__group">
                  <label className="form__label" >Prompt : </label>
                    <input
                     type="text"
                    className="form__input"
                    onChange= {event =>this.updateCardPrompt(event, index, 'prompt') }
                    />
                </div>
                <div className="form__group">
                  <label className="form__label" >Answer : </label>
                    <input type="text"
                    onChange= {event =>this.updateCardPrompt(event, index, 'answer')}
                     className="form__input" />
                </div>
                <br/>

              </div>
            )
          })
        }
          <button
          className="form__button"
          onClick={() => this.addCard()}
          >Add Card</button>
          <button
          className="form__button"
          onClick={() => this.removeCard()}
          >Remove Card</button>
          {' '}
          <Link
          className="form__button"
          to='/'
          onClick={() => this.addStack()}
          >Save and Add Stack</Link>
      </div>
    );
  }

}


export default connect(null, { addStack })( StackForm );
