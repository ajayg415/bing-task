import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideContainer from "./../SlideContainer/SlideContainer";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BodyContainer.css";

class BodyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchRes: []
    };
  }

  componentDidMount() {
    axios.get(`MOCK_DATA.json`).then(res => {
      //const searchRes = res.data;
      const searchRes = [];
      for(let i=0;i<(res.data.length/30);i++){
        searchRes.push(res.data.slice((i*30), (i*30)+30))
      }
      this.setState({ searchRes });
      console.log(searchRes)
    });
  }

  render() {
    return (
      <Carousel showThumbs={false}>
        {this.state.searchRes.map(x=>{
          return <SlideContainer data={x} key={Math.random(0, 1)} />;
        })}
      </Carousel>
    );
  }
}

export default BodyContainer;
