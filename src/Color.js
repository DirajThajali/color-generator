import React, { useState, useEffect } from "react";
import "./Color.css";

const Color = ({ h, s, l, hex, brightness, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
        // alertThe click to Copy div to change to copied to clipboard for 3 seconds
      }}
      style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%` }}
    >
      <p>{brightness}%</p>
      <p>{hex}</p>
      <p>{alert ? "Copied hex to clipboard" : "Click to copy"}</p>
    </article>
  );
};

export default Color;
