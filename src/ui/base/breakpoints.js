const breakpoints = {
  medium: {
    width: '700px',
  },
};

Object.keys(breakpoints).forEach((key) => {
  const { width } = breakpoints[key];
  breakpoints[key].max = `@media only screen and (max-width: ${width})`;
  breakpoints[key].min = `@media only screen and (min-width: ${width})`;
});

export default breakpoints;
