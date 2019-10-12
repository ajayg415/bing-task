import React from 'react';

import './GiftFor.css';

class GiftFor extends React.Component{
	constructor(){
		super();
		this.state = {
			'giftFor': ''
		}
	}

	handleClidk=(a)=>{
		console.log('handling click');
		//TODO: get red color icons to show them as selected.
	}

  render(){
		const { updateGiftFor } = this.props;
		return (
			<div className='gift-for'>
				<div className='label'>Gift For</div>
				<div>
					<span className='sprite all' onClick={()=> updateGiftFor('all')}></span>
					<span className='sprite men' onClick={()=> updateGiftFor('men')}></span>
					<span className='sprite women' onClick={()=> updateGiftFor('women')}></span>
					<span className='sprite kids' onClick={()=> updateGiftFor('kids')}></span>
					<span className='sprite teen' onClick={()=> updateGiftFor('teen')}></span>
				</div>
			</div>
		)
	}
}

export default GiftFor;