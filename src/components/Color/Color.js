import React, { useState, useEffect } from "react";
import "./Color.css";

const Color = ({ h, s, l, hex, brightness, id }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
      style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%` }}
      className={
        id === 10
          ? "light-color middle upper"
          : id < 10
          ? "dark-color"
          : "light-color"
      }
    >
      <p>
        {id === 10 ? (
          <>
            <span className="dark-color">Pure </span>
            <span className="light-color">color</span>
          </>
        ) : (
          brightness + "%"
        )}
      </p>
      <p>{hex}</p>
      <p className="clip">
        {alert ? "Copied hex to clipboard" : "Click to copy"}
      </p>
    </article>
  );
};

export default Color;
