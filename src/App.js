import React, { useState, useEffect } from "react";
import "./App.css";
import Color from "./components/Color/Color";
import { getTintsAndShades } from "./components/TintsAndShadesGenerator/tintsAndShadesGenerator";
import { switchTheme } from "./components/Theme/theme";
import { isError } from "./components/Error/error";

function App() {
  const [color, setColor] = useState("");
  const [type, setType] = useState({ hsl: false, hex: true, rgb: false });

  const [list, setList] = useState([]);
  const [error_msg, setError_msg] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      if (!isError(color, type)) {
        setList(getTintsAndShades(color, type));
        setColor("");
      } else {
        setErrorAlert(true);
        setError_msg(isError(color, type));
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorAlert(false);
      setError_msg("");
    }, 5000);
  }, [errorAlert]);

  useEffect(() => {
    switchTheme();
    setList(
      getTintsAndShades("#339FFF", { hsl: false, hex: true, rgb: false })
    );
  }, []);

  return (
    <>
      <section className="container">
        <div className="header">
          <h1 className="title">Tints and Shades Generator</h1>
          <label className="theme-switch">
            <div>
              <input id="toggler" type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
        </div>
        <div className="error">{error_msg}</div>
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
            placeholder={type.hex ? "#339FFF" : type.rgb ? "51 159 255" : "208"}
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
