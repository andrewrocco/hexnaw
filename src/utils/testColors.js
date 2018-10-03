import colorable from 'colorable';

const testColors = () => {
  const colors = {
    red: 'red',
    green: 'green',
    blue: 'blue',
  };

  const result = colorable(colors, { compact: true, threshold: 0 });

  return result;
};

export default testColors;
