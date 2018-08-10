import React, { Component } from 'react';
import StackList from './StackList';
import { Link } from 'react-router-dom';


const Flash =() => {

  // getStack(stack){
  //     console.log(stack);
  // }

    return (
      <div>
        <h1 className="flash__header">FlashCard Pro</h1>
           < StackList  />
           <hr className='mb-sm'/>
           <Link to='/stack/new' className="header__link">Create a New Stack</Link>
      </div>
    )
  
}

export default Flash;
