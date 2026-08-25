import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#667eea");

  function changeColor() {
    const colors = [
      "#667eea",
      "#764ba2",
      "#ff6b6b",
      "#feca57",
      "#1dd1a1",
      "#48dbfb",
      "#ff9ff3"
    ];

    const randomNumber = Math.floor(
      Math.random() * colors.length
    );

    setColor(colors[randomNumber]);
  }

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="box">
        <h1>Color Generator 🎨</h1>
        <h2>Current Color</h2>
        <h2>{color}</h2>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
}

export default App;