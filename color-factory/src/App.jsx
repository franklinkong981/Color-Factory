import React, {useState} from 'react';
import {Routes, Navigate, Route} from "react-router-dom";

import ColorList from "./ColorList.jsx";
import NewColorForm from "./NewColorForm.jsx";
import FilterColors from "./FilterColors.jsx";

import './App.css';

const initialColors = [
  {name: "Red", hex: "#FF0000"},
  {name: "Yellow", hex: "#FFFF00"},
  {name: "Green", hex: "#00FF00"}
];

function App() {
  const [colors, setColors] = useState(initialColors);

  const addNewColor = (newColor) => {
    setColors([newColor, ...colors]);
  }

  const resetColors = () => {
    setColors(initialColors);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} resetColors={resetColors}/>} />
        <Route path="/colors/new" element={<NewColorForm addNewColor={addNewColor}/>} />
        <Route path="/colors/:color" element={<FilterColors colorsToFilter={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
