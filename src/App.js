import React, { useState } from "react";
import "./App.css";
import Color from "./Color";

function App() {
  const [color, setColor] = useState("");
  const [type, setType] = useState("hsl");

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setList([{ color, type }]);
      setColor("");
    } else {
      // show a modal that says please enter a value
    }
  };

  return (
    <>
      <section>
        <h1>Tints and Shades Generator</h1>
        <form onSubmit={handleSubmit}>
          <select
            name="colorCode"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="hex">HEX</option>
            <option value="rgb">RGB</option>
            <option value="hsl">HSL</option>
          </select>
          <input
            placeholder="#0000ff"
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>
      </section>
      <section>
        {list.map((color, index) => {
          return <Color key={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
