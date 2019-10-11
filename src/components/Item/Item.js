import React from 'react';

class Item extends React.Component {

  renderImage(data, style1, style2){
    if(data.width){
      return <img src={`imgs/search/${data.url}.jpg`} className="height" style={{ gridColumn: style1}} />
    }else if(data.height){
      return <img src={`imgs/search/${data.url}.jpg`} className="height100p" style={{ gridRow: style1, gridColumn: style2}}/>
    }else{
      return <img src={`imgs/search/${data.url}.jpg`} className="height" />
    }
  }

  getId = (cell) => {
    return cell.id <= 30 ? cell.id : cell.id - 30 * Math.floor(cell.id / 30);
  }

  getCellImpact = (obj, ce) =>{
    //let objs = this.props.pageData.slice(0, this.getId(obj));
    let objId = this.getId(obj);
    let objColPos = (objId < this.props.gridSize) ? objId : (objId - this.props.gridSize)
    let wPrevObjs = this.props.pageData.slice(0, objId).filter(x=>x.width !== undefined).length;
    let line = Math.ceil((objId+wPrevObjs)/this.props.gridSize);
    if(line === ce.v){ 
      return false; //Current element and and the vertical element are on same line 
    }else if(objColPos > ce.h){
      return false; //Both are in different lines, but current element places before the vertical line horzintally
    }
    return true;
  }

  render() {
    let { data, gridSize } = this.props;
    //const id = (data.id <= 30) ? data.id : (data.id-(30*Math.floor(data.id/30)));
    const id = this.getId(data);
    const colPos = (id < gridSize) ? id : (id - gridSize)
    let style1 = "";
    let  style2 = "";
    let counter = 0;
    let wcells = this.props.pageData
      .slice(0, this.props.position)
      .filter(x => x.width !== undefined).length;
    const line = Math.ceil((id+wcells) / gridSize);
    let hcells = this.props.pageData
      .slice(0, this.props.position)
      .filter(x => x.height !== undefined);
    hcells.forEach(o => {
      counter = this.getCellImpact(o,{h: (colPos+wcells), v: line}) ? counter + 1 : counter;
    });
    
    if (data.width) {
      style1 = `${colPos+wcells+counter} / span 2`;
    }else if (data.height) {
      style2 = colPos + wcells + counter;
      style1 = `${line} / span 2`;
    }

    return this.renderImage(data, style1, style2);

  }
};

export default Item;