/**
 * Color Utilities
 */

import ntc from '@yatiac/name-that-color';
import slugify from 'slugify';

/**
 * Find Hex Colors
 *
 * Uses regex to find color strings in a blob of text.
 *
 * TODO: Prevent this function from crashing the browser on very large blocks
 * of text by using a webworker to complete this request in the background.
 * @link https://stackoverflow.com/a/10344560/1299588

 *
 * @param  {string} input Text to check for color values.
 * @return {object}       An array of colors found.
 */
export const findColors = (input) => {
  // Begin an empty array for storing colors.
  let colorsList = [];
  // Get all colors found in the input.
  const foundColors = input.match(/#([0-9A-F]){3}(([0-9A-F]){3})?\b/ig);
  // If the regex results are not null.
  if (foundColors && 0 < foundColors.length) {
    // De-dupe colors array & pass to colors List.
    colorsList = dedupeColors(foundColors);
  }
  // Return array of colors.
  return colorsList;
}

/**
 * Dedupe Colors
 *
 * @param  {object} colorsList Unfiltered color list.
 * @return {object}            A list of unique colors.
 */
export const dedupeColors = (colorsList) => {
  // For each color in the list...
  colorsList.forEach((color, i) => {
    // If color code is 3 digits, expand to six.
    if (color.match(/^#[0-9A-F]{3}$/i)) {
      colorsList[i] = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
    // Convert all values to lowercase.
    colorsList[i] = colorsList[i].toLowerCase();
  });
  // Return a Set object of unique values.
  return [...new Set(colorsList)];
};

/**
 * Get Named Colors
 *
 * Returns a list of unique color names with an associated hex color.
 *
 * @link https://www.npmjs.com/package/@bencevans/color-array-average
 */
export const getNamedColors = (colorsList) => {
  // Create an empty array to store the names of the colors.
  const colorNames = {};
  // Iterate through every unique hex color in the list.
  colorsList.forEach( (color) => {
    // Convert each color to a slug.
    const name = slugify(ntc(color).colorName,{lower: true});
    // Check if that slug exists in the named colors array.
    if (colorNames[name]) {
        // If the slug exists, add the new hex color to the array nested under that slug.
        colorNames[name].push(color);
      } else {
        // If the slug does not exist, add it to the named colors array in a nested array.
        colorNames[name] = [color];
      }
  });

  // Create an empty array to store the unique color names.
  const namedColors = {};
  // Iterate through each slug in the named colors array.
  Object.keys(colorNames).forEach( (name) => {
    // If the nested array of hex colors contains one item...
    if (1 === colorNames[name].length) {
      // Move that item to the named colors array.
      namedColors[name] = colorNames[name][0];
    } else {
      // Else, average the array of hex values store the result as a string.
      namedColors[name] = averageColor(colorNames[name]);
    }
  });

  // Return the processed list of named colors.
  return namedColors;
}

/**
 * SCSS String
 *
 * Formats a color value as an SCSS variable.
 */
export const scssString = (color) => {
  return `$color-${slugify(ntc(color).colorName,{lower: true})}: ${color};`;
}


/**
 * PostCSS String
 *
 * Formats a color value as a PostCSS variable.
 */
export const postcssString = (color) => {
  return `--color-${slugify(ntc(color).colorName,{lower: true})}: ${color};`;
}


/**
 * CMYK String
 *
 * Formats a color value to CMYK percentages.
 *
 * @param  {object} color Object from the npm/color package.
 * @return {string}       Formatted CMYK conversion.
 */
export const cmykString = (color) => {
  // Convert the color to an array of CMYK values.
  const cmyk = color.cmyk().round().array();
  const cmykLabels = ['C', 'M', 'Y', 'K'];
  // Format each item in the array and return it as a string.
  return cmyk.map((value, i) => {return `${cmykLabels[i]} ${value}%`}).join(', ');
}

/**
 * Color Average
 *
 * Averages an array of hex values into a single hex string.
 * Patched fork of @bencevans/color-array-average v1.0.1
 *
 * @see https://www.npmjs.com/package/@bencevans/color-array-average
 *
 * @param  {array} colors Input array of colors.
 * @return {string}       Average color.
 */
export const averageColor = ( colors ) => {
  const [totalR, totalG, totalB] = colors.reduce((prev, curr) => {
    curr = curr.substring(1);

    for (let index = 0; index < 3; index++) {
      let col = curr.substr(index * (curr.length / 3), (curr.length / 3));
      col = col.length === 1 ? col + col : col;
      col = parseInt(col, 16);
      prev[index] += (col / colors.length);
    }

    return prev;
  }, [0, 0, 0]);

  return '#' +
    Math.round(totalR).toString(16).padStart(2, '0') +
    Math.round(totalG).toString(16).padStart(2, '0') +
    Math.round(totalB).toString(16).padStart(2, '0');
};
