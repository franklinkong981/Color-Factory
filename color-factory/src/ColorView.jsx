import React from "react";

const ColorView = ({color}) => {
  return (
    <div className="ColorView" style={{backgroundColor: color.hex}}>
      <h1 classname="ColorView-description">This is {color.name}, hex value: {color.hex}</h1>
    </div>
  );
};

export default ColorView;