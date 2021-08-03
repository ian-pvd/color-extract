/**
 * Color Utilities
 */

import ntc from '@yatiac/name-that-color';
import slugify from 'slugify';

/**
 * Get Colors
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
export const getColors = (input) => {
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
  colorsList.forEach((color, i) => {
    if (color.match(/^#[0-9A-F]{3}$/i)) {
      colorsList[i] = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
  });
  return [...new Set(colorsList)];
};

/**
 * Named Colors
 *
 * Returns a list of unique color names with an associated hex color.
 *
 * TODO: When deduping named colors for the SCSS/PostCSS block, collect all
 * hex values that match a color name slug and average them together.
 *
 * @link https://www.npmjs.com/package/@bencevans/color-array-average
 */
export const namedColors = (colorsList) => {
  // Create an empty array for named colors.
  // Iterate through every unique hex color in the list.
    // Convert each color to a slug.
    // Check if that slug exists in the named colors array.
      // If the slug exists, add the new hex color to the array nested under that slug.
      // If the slug does not exist, add it to the named colors array in a nested array.
  // Iterate through each slug in the named colors array.
    // If the array of nested hex colors contains one item...
      // Convert it to a string.
      // Else, average the array of hex values store the result as a string.
  // Return the processed list of named colors.
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
