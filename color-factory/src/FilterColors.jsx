import React from "react";
import {useParams, useNavigate, Navigate} from "react-router-dom";

import ColorView from "./ColorView.jsx";

const FilterColors = ({colorsToFilter}) => {
  const {color} = useParams();
  const navigate = useNavigate();
  const [selectedColor] = colorsToFilter.filter((color) => color.name == color);

  return (
    <>
      {selectedColor ? <ColorView color={selectedColor}/> : <Navigate to="/colors"/>}
      <button className="ColorView-home-button" onClick={() => navigate("/colors")}>Go to Home Page</button>
    </>
  );
};

export default FilterColors;