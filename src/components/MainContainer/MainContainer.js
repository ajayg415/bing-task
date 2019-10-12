import React from 'react';

import BodyContainer from "./../BodyContainer/BodyContainer";
import Filter from './../Filters/Filters'

import "./MainContainer.css";

class MainContainer extends React.Component{
  constructor(){
		super();
		this.state ={
			filters : {
				category : '',
				giftfor: '',
				pricerange: ''
			}
		}
  }
  
  updateGiftFor = (si) =>{
    let filters = this.state.filters;
    filters.giftfor = si;
    this.setState({filters})
	}

  render(){
    return (
      <div className='main-container'>
        <section className='res-header'>
          <div className='search-string'>Chritmas Gifts</div>
          <Filter updateGiftFor={this.updateGiftFor}/>
        </section>
        <BodyContainer filters={this.state.filters}/>
      </div>
    );
  }
}

export default MainContainer;