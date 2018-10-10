const breakpoints = {
  medium: {
    point: '700px',
  },
};

Object.keys(breakpoints).forEach((key) => {
  const bp = breakpoints[key].point;
  breakpoints[key].max = `@media only screen and (max-width: ${bp.point})`;
  breakpoints[key].min = `@media only screen and (min-width: ${bp.point})`;
});

export default breakpoints;
