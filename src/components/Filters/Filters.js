import React from 'react';

import Category from'./../Category/Category';
import GiftFor from './../GiftFor/GiftFor';
import PriceRange from './../PriceRange/PriceRange';

import './Filters.css';

class Filters extends React.Component{
	
	render(){
		return (
			<div className='filters'>
				<Category/>
				<GiftFor updateGiftFor={this.props.updateGiftFor}/>
				<PriceRange/>
			</div>
		)
	}
}

export default Filters;