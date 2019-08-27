/**
 * Clean out all empty string values from the given colors object.
 *
 * @param {*} colors
 */
export const cleanColors = colors => (
  Object
    .values(colors)
    .filter(v => v)
    .map(c => `#${c}`)
);
