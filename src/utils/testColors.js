import colorable from 'colorable';

/**
 * Test the color contrast of the given colors. Note that the color object passed
 * into this method must be cleaned of all empty entries.
 *
 * @param {object} colors
 * @returns {object}
 */
export const testColors = (colors) => {
  const result = colorable(colors, { compact: true, threshold: 0 });
  return result;
};
