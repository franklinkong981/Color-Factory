import React, {useState} from 'react';
import {Routes, Navigate, Route} from "react-router-dom";

import ColorList from "./ColorList.jsx";
import NewColorForm from "./NewColorForm.jsx";
import FilterColors from "./FilterColors.jsx";

import './App.css';

function App() {
  const [colors, setColors] = useState([
    {name: "red", hex: "#FF0000"},
    {name: "yellow", hex: "#FFFF00"},
    {name: "green", hex: "#00FF00"}
  ]);

  const addNewColor = (newColor) => {
    setColors([newColor, ...colors]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors}/>} />
        <Route path="/colors/new" element={<NewColorForm addNewColor={addNewColor}/>} />
        <Route path="/colors/:color" element={<FilterColors colorsToFilter={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
