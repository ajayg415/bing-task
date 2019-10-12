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
      allRes: [],
      searchRes: []
    };
  }

  static getDerivedStateFromProps(props, state){
    let sr = state.allRes;
    const giftfor = props.filters.giftfor;
    if(giftfor === 'all'){
      let res = []
      for(let i=0;i<(state.allRes.length/30);i++){
        res.push(state.allRes.slice((i*30), (i*30)+30))
      }
      return {searchRes: res};
    }else if(giftfor !== ''){
      let d = sr.filter(x=> x.searchFor === giftfor);
      let res = []
      for(let i=0;i<(d.length/30);i++){
        res.push(d.slice((i*30), (i*30)+30))
      }
      console.log(res)
      return {searchRes: res}
    }
    return null;
  }

  getSliceData=(d)=>{
    let res = []
    for(let i=0;i<(d.length/30);i++){
      res.push(d.slice((i*30), (i*30)+30))
    }
    return res;
  }

  componentDidMount() {
    axios.get(`MOCK_DATA.json`).then(res => {
      //const searchRes = res.data;
      // const searchRes = [];
      // for(let i=0;i<(res.data.length/30);i++){
      //   searchRes.push(res.data.slice((i*30), (i*30)+30))
      // }
      this.setState({ searchRes: this.getSliceData(res.data), allRes: res.data });
      //console.log(searchRes)
    });
  }

  render() {
    return (
      <Carousel showThumbs={false} >
        {this.state.searchRes.map(x=>{
          return <SlideContainer data={x} key={Math.random(0, 1)}/>;
        })}
      </Carousel>
    );
  }
}

export default BodyContainer;
