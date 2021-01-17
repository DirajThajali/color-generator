import { supportedPrimAndSecon } from "./tintsAndShadesGenerator";
export const isError = (input, type) => {
  if (supportedPrimAndSecon.includes(input)) {
    return "";
  }
  const re = new RegExp("\\s+");
  const value = input.split(re);
  const len = value.length;
  if (type.hsl) {
    if (len > 1) {
      return "Enter a valid hue (0-360) value";
    }
  } else if (type.rgb) {
    if (len !== 3) {
      return "Enter a valid rgb value";
    }
  } else {
    if (len > 1) {
      return "Enter a valid hex value";
    }
  }
};
