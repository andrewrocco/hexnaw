const breakpoints = {
  medium: {
    width: '700px',
  },
};

Object.keys(breakpoints).forEach((key) => {
  const bp = breakpoints[key].width;
  breakpoints[key].max = `@media only screen and (max-width: ${bp})`;
  breakpoints[key].min = `@media only screen and (min-width: ${bp})`;
});

export default breakpoints;
