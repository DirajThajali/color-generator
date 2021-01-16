import React from "react";
import "./Color.css";

const Color = ({ h, s, l, hex, brightness, index }) => {
  return (
    <article
      onClick={() => {
        navigator.clipboard.writeText(hex);
        // alertThe click to Copy div to change to copied to clipboard for 3 seconds
      }}
      style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%` }}
    >
      <p>{brightness}%</p>
      <p>{hex}</p>
      <p>Click to copy</p>
    </article>
  );
};

export default Color;
