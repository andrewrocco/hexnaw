/**
 * Generates URL parameters based on the tested colors and updates the address
 * bar URL with these params, ultimately making real reports shareable,
 *
 * @param {Object} colors the colors tested for the current report
 */
export const generateURLParams = (colors) => {
  // Always work with the origin URL since we want to replace the entire URL each time params are generated
  const url = new URL(window.location.origin);
  const params = new URLSearchParams(url);

  Object.keys(colors).forEach((color) => {
    if (colors[color]) {
      params.append(color, colors[color]);
    }
  });

  window.history.replaceState({}, '', `?${params.toString()}`);
};
