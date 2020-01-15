import React from 'react';

const Tile = props => {
    const style = {
      background: props.color,
    }
    const className = props.isOpen ? "tile active" : "tile unactive"; 
    return (
      <div style={style} className={className} onClick={props.onClick}></div>
    )
}

export default Tile;