import { rgbToHsl, hexToHsl, hslToHex } from "./colorConverter";

export const getTintsAndShades = ({ color, type }) => {
  let value = color;
  if (type === "rgb") {
    value = rgbToHsl(color);
  }
  if (type === "hex") {
    value = hexToHsl(color);
  }

  const re = new RegExp("\\s+");
  value = value.split(re);
  const h = parseInt(value[0]);
  const s = parseInt(value[1]) || "100";
  const l = parseInt(value[2]) || "50";
  // list will consist of all different shades and tints
  // each item in the list will have h, s, l properties along with
  // its corresponding hex value and brightness value
  return [{}];
};
