import React from "react";

const Color = ({ color, type }) => {
  if (type === "hsl") {
    console.log(color);
  }
  return <div style={{ backgroundColor: `${color}` }}>{color}</div>;
};

export default Color;
