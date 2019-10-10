import React from 'react';

class Item extends React.Component{

  render(){
    let {data, gridSize} = this.props; 
    let colPos = (data.id < gridSize) ? data.id : (gridSize - data.id);
    let style = data.width ? `${colPos} / span ${colPos+2}`:'';
    let rowPos = Math.ceil(data.id/gridSize);
    let wFlag = data.width ? true: false;
    let hFlag = data.height ? true: false;
    

    return(
      <React.Fragment>
      {
        (data.width) ?
          <img src={`./../../imgs/search/${data.url}.jpg`} className="height" style={{ gridColumn: style}}/>
        :
          <img src={`./../../imgs/search/${data.url}.jpg`} className="height"/>
      }
      </React.Fragment>
      
    )
  }

};

export default Item;