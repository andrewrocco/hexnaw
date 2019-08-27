/**
 * Generates a hyphen separated hex value URL parameter based on the tested colors and updates
 * the address bar with this parameter, ultimately making report results shareable.
 *
 * @param {Object} colors the colors tested for the current report
 */
export const generateURLHexParams = (colors) => {
  const hexParamString = Object.values(colors).join('-').replace(/#/g, '');
  window.history.replaceState({}, '', `?${hexParamString}`);
};

/**
 * Get the hex values string from the URL parameter
 *
 * @returns {array} an array of hex values derived from URL parameters
 */
export const getHexValuesFromURLParams = () => {
  const url = new URL(window.location.href);

  // Start reading params after the query string (the first item in the string)
  const hexString = url.search.slice(1);

  // Build an array from the hex string
  const hexValues = hexString.split('-');

  return hexValues;
};
