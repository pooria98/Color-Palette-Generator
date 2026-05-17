export const normalizeHue = (value: number) => {
  if (value > 360) {
    return value - 360;
  } else if (value < 0) {
    return value + 360;
  } else {
    return value;
  }
};

export const normalizeSL = (value: number) => {
  if (value > 100) {
    return value - 100;
  } else if (value < 0) {
    return value + 100;
  } else {
    return value;
  }
};

export const hexToHsl = (hex) => {
  let cleanHex = hex.replace(/^#/, "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
};

export const hslToHex = (h, s, l) => {
  if (typeof h === "object") {
    s = h.s;
    l = h.l;
    h = h.h;
  }

  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));

  let r1, g1, b1;

  if (hp <= 1) {
    r1 = c;
    g1 = x;
    b1 = 0;
  } else if (hp <= 2) {
    r1 = x;
    g1 = c;
    b1 = 0;
  } else if (hp <= 3) {
    r1 = 0;
    g1 = c;
    b1 = x;
  } else if (hp <= 4) {
    r1 = 0;
    g1 = x;
    b1 = c;
  } else if (hp <= 5) {
    r1 = x;
    g1 = 0;
    b1 = c;
  } else {
    r1 = c;
    g1 = 0;
    b1 = x;
  }

  const m = l - c / 2;
  const r = Math.round((r1 + m) * 255);
  const g = Math.round((g1 + m) * 255);
  const b = Math.round((b1 + m) * 255);

  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const generateAnalogous = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 65 + 30);
  const l = Math.floor(Math.random() * 65 + 30);

  const color1 = hslToHex(h, s, l);
  const color2 = hslToHex(normalizeHue(h + 30), s, l);
  const color3 = hslToHex(normalizeHue(h + 60), s, l);
  const color4 = hslToHex(normalizeHue(h + 90), s, l);
  const color5 = hslToHex(normalizeHue(h + 120), s, l);

  return [color1, color2, color3, color4, color5];
};

export const generateComplementary = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 60 + 30);
  const l = Math.floor(Math.random() * 60 + 30);

  const color1 = hslToHex(h, s, l);
  const color2 = hslToHex(normalizeHue(h + 15), s, l);
  const color3 = hslToHex(normalizeHue(h + 180), s, l);
  const color4 = hslToHex(normalizeHue(h + 195), s, l);

  return [color1, color2, color3, color4];
};

export const generateTriad = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 60 + 30);
  const l = Math.floor(Math.random() * 60 + 30);

  const color1 = hslToHex(h, s, l);
  const color2 = hslToHex(normalizeHue(h + 120), s, l);
  const color3 = hslToHex(normalizeHue(h + 240), s, l);

  return [color1, color2, color3];
};

export const generateSquare = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 60 + 30);
  const l = Math.floor(Math.random() * 60 + 30);

  const color1 = hslToHex(h, s, l);
  const color2 = hslToHex(normalizeHue(h + 90), s, l);
  const color3 = hslToHex(normalizeHue(h + 180), s, l);
  const color4 = hslToHex(normalizeHue(h + 270), s, l);

  return [color1, color2, color3, color4];
};

export const generateShades = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 60 + 30);
  const l = Math.floor(Math.random() * 40 + 50);

  const color1 = hslToHex(h, s, l);
  const color2 = hslToHex(h, s, normalizeSL(l - 10));
  const color3 = hslToHex(h, s, normalizeSL(l - 20));
  const color4 = hslToHex(h, s, normalizeSL(l - 30));
  const color5 = hslToHex(h, s, normalizeSL(l - 40));

  return [color1, color2, color3, color4, color5];
};

export const generateTones = () => {
  const h = Math.floor(Math.random() * 360);
  const s = 30;
  const l = Math.floor(Math.random() * 60 + 30);

  const color1 = hslToHex(h, s, l);
  const color2 = hslToHex(h, normalizeSL(s + 15), l);
  const color3 = hslToHex(h, normalizeSL(s + 30), l);
  const color4 = hslToHex(h, normalizeSL(s + 45), l);
  const color5 = hslToHex(h, normalizeSL(s + 60), l);

  return [color1, color2, color3, color4, color5];
};
