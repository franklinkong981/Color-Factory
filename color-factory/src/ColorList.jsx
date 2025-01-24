import React from "react";
import {Link} from "react-router-dom";
import {v4 as uuid} from "uuid";

const ColorList = ({colors, resetColors}) => {
  return (
    <div className="ColorList">
      <h1 className="ColorList-welcome">Welcome to the Color Factory!</h1>
      <h2 className="ColorList-select">Please select a color below to view the color:</h2>
      <ul className="ColorList-list">
        {colors.map((color) => {
          return <li key={uuid()}><Link className="ColorList-color" to={`/colors/${color.name}`}>{color.name}</Link></li>;
        })}
      </ul>
      <h2 className="ColorList-new-color-header">Or add a new color to the list</h2>
      <button className="ColorList-new-color-button"><Link to="/colors/new">Add New Color</Link></button>
      <button className="ColorList-rest-colors-button" onClick={() => resetColors()}>Reset Colors</button>
    </div>
  );
};

export default ColorList;