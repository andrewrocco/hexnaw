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


const convertParamEntriesToObject = (paramEntries) => {
  const results = {};

  paramEntries.forEach((colorValue, hexInputName) => {
    results[hexInputName] = colorValue;
  });

  return results;
};

export const hasURLParam = (key) => {
  const url = new URL(window.location.href);
  // Start reading params after the query string (the first item in the string)
  const params = new URLSearchParams(url.search.slice(1));

  return !!params.has(key);
};


/**
 *
 */
export const getURLParam = (key) => {
  const url = new URL(window.location.href);
  // Start reading params after the query string (the first item in the string)
  const params = new URLSearchParams(url.search.slice(1));

  return params.get(key);
};
