import colorable from 'colorable';

const testColors = (colors) => {
  // remove empty string values from object
  const cleanColors = Object
    .values(colors)
    .filter(v => v)
    .map(c => `#${c}`);
  const result = colorable(cleanColors, { compact: true, threshold: 0 });

  return result;
};

export default testColors;
