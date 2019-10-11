import React from 'react';

import BodyContainer from "./../BodyContainer/BodyContainer";

import "./MainContainer.css";

class MainContainer extends React.Component{

  render(){
    return (
      <div className='main-container'>
        <section>Filter contanet</section>
        <BodyContainer/>
      </div>
    );
  }
}

export default MainContainer;