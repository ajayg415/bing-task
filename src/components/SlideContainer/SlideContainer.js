import React from "react";
import Item from './../Item/Item'

class SlideContainer extends React.Component {

  componentDidMount(){
    console.log(document.body.offsetWidth);
  }
  
  render() {
    const gridSize = Math.floor(document.body.offsetWidth / 105) > 12 ? 12 : Math.floor(document.body.offsetWidth / 105);
    const app = 'auto '.repeat(gridSize);
    return (
      <div className="page" style={{ gridTemplateColumns: app}}>
        {this.props.data.map(y => {
          return <Item key={y.id} data={y} gridSize={gridSize}/>;
        })}
      </div>
    );
  }
}

export default SlideContainer;
