import colorable from 'colorable';

const testColors = (colors) => {
  // remove empty string values from object
  const cleanColors = Object.values(colors).filter(v => v !== '');
  const result = colorable(cleanColors, { compact: true, threshold: 0 });
  console.log(result);
  return result;
};

export default testColors;
