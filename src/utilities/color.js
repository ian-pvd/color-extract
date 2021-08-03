/**
 * Color Utilities
 */

import ntc from '@yatiac/name-that-color';
import slugify from 'slugify';

/**
 * Get Colors
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

  /**
   * Dedupe Named Colors
   *
   * TODO: When deduping named colors for the SCSS/PostCSS block, collect all
   * hex values that match a color name slug and average them together.
   *
   * @link https://www.npmjs.com/package/@bencevans/color-array-average
   */

  return [...new Set(colorsList)];
};

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
  let cmyk = color.cmyk().round().array();
  // Format each item in the array and return it as a string.
  return cmyk.map((value) => {return `${value}%`}).join(', ');
}
