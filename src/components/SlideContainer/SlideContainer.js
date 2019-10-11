import React from "react";
import Item from "./../Item/Item";

class SlideContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gridSize: 12
    };
  }

  updateGridSize = () => {
    const size = Math.floor(document.body.offsetWidth / 105);
    if (size !== this.state.gridSize) {
      this.setState({ gridSize: size > 12 ? 12 : size });
    }
  };

  componentDidMount() {
    this.updateGridSize();
    window.addEventListener("resize", this.updateGridSize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateGridSize);
  }

  render() {
    const app = "auto ".repeat(this.state.gridSize);
    return (
      <div className="page" style={{ gridTemplateColumns: app }}>
        {this.props.data.map((y,i,pageData) => {
          return (
            <Item
              key={y.id}
              data={y}
              gridSize={this.state.gridSize}
              position={i}
              pageData={pageData}
            />
          );
        })}
      </div>
    );
  }
}

export default SlideContainer;
