import React, {useState} from 'react';
import {Routes, Navigate, Route} from "react-router-dom";

import ColorList from "./ColorList.jsx";
import NewColorForm from "./NewColorForm.jsx";
import ColorView from "./ColorView.jsx";

import './App.css';

function App() {
  const [colors, setColors] = useState([]);

  const addNewColor = (newColor) => {
    setColors([newColor, ...colors]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors}/>} />
        <Route path="/colors/new" element={<NewColorForm addNewColor={addNewColor}/>} />
        <Route path="/colors/:color" element={<ColorView />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
