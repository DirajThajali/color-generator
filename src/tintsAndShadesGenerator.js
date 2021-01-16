import { rgbToHsl, hexToHsl, hslToHex } from "./colorConverter";

export const getTintsAndShades = (color, type) => {
  const isPrimOrSecond = getPrimaryOrSecondaryColor(color);
  let list = [];
  let value = color;
  // console.log(type);
  if (!isPrimOrSecond) {
    if (type.rgb) {
      value = rgbToHsl(color);
    }
    if (type.hex) {
      value = hexToHsl(color);
    }
  }
  const re = new RegExp("\\s+");
  value = value.split(re);
  let h = isPrimOrSecond || parseInt(value[0]);
  const s = 100;
  let l = 100;

  let counter = 0;

  for (let i = 0; i < 10; i++) {
    list.push({
      h,
      s,
      l,
      hex: hslToHex(h, s, l),
      brightness: l - counter,
      id: i,
    });
    counter += 5;
    l -= 5;
  }

  list.push({ h, s, l: l, hex: hslToHex(h, s, l), brightness: 0, id: 10 }); // 0% actual: 50%
  l -= 5;

  for (let i = 11; i < 21; i++) {
    counter += 5;
    list.push({
      h,
      s,
      l,
      hex: hslToHex(h, s, l),
      brightness: counter - l,
      id: i,
    });
    l -= 5;
  }
  return list;
};

const getPrimaryOrSecondaryColor = (color) => {
  // red, orange, yellow, green, blue, violet
  switch (color) {
    case "red":
      return 0;
    case "orange":
      return 30;
    case "yellow":
      return 60;
    case "green":
      return 120;
    case "blue":
      return 240;
    case "violet":
      return 270;
    case "azure":
      return 210;
    case "purple":
      return 285;
    case "magenta":
      return 300;
    default:
      return 0;
  }
};
