import React from 'react';

import BodyContainer from "./../BodyContainer/BodyContainer";

class MainContainer extends React.Component{

  render(){
    return (
      <React.Fragment>
        <section>Filter contanet</section>
        <BodyContainer/>
      </React.Fragment>
    );
  }
}

export default MainContainer;