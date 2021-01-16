import React, { useState, useEffect } from "react";
import "./App.css";
import Color from "./Color";
import { getTintsAndShades } from "./tintsAndShadesGenerator";

function App() {
  const [color, setColor] = useState("");
  const [type, setType] = useState({ hsl: false, hex: true, rgb: false });

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setList(getTintsAndShades(color, type));
      setColor("");
    }
  };

  useEffect(() => {
    setList(getTintsAndShades("blue", { hsl: false, hex: true, rgb: false }));
  }, []);

  return (
    <>
      <section className="container">
        <h1 className="title">Tints and Shades Generator</h1>
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
        <div className="sub-title">
          <p className="tints">Tints</p>
        </div>
        <div className="colors">
          {list.map((color) => {
            return <Color key={color.id} {...color} />;
          })}
        </div>
        <div className="sub-title">
          <p className="shades">Shades</p>
        </div>
      </section>
    </>
  );
}

export default App;
