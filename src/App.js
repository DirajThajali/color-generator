import React, { useState } from "react";
import "./App.css";
import Color from "./Color";
import { getTintsAndShades } from "./tintsAndShadesGenerator";

function App() {
  const [color, setColor] = useState("");
  const [type, setType] = useState({ hsl: true, hex: false, rgb: false });

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setList(getTintsAndShades(color, type));
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
            name="type"
            value={type.hex ? "hex" : type.rgb ? "rgb" : "hsl"}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "hex") {
                setType({ hsl: false, hex: true, rgb: false });
              }
              if (value === "hsl") {
                setType({ hsl: true, hex: false, rgb: false });
              }
              if (value === "rgb") {
                setType({ hsl: false, hex: false, rgb: true });
              }
            }}
          >
            <option value="hex">HEX</option>
            <option value="rgb">RGB</option>
            <option value="hsl">HSL</option>
          </select>
          <input
            placeholder={type.hex ? "#0000ff" : type.rgb ? "0 0 255" : "240"}
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
