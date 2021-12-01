/**
 * Color Extract
 *
 * The primary app area, with columns for pasting and viewing colors.
 */

import React from 'react';
import pluralize from 'pluralize';
import TextWindow from '../text-window';
import ColorSwatches from '../color-swatches';
import './style.scss';

class ColorExtract extends React.Component {

  /**
   * Handle Change
   *
   * Process the textarea value on input.
   */
  handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;
    this.props.extractColors(input);
  };

  getCssText = () => {
    if (this.props.hasInput) {
      let cssOutput = `
        /**
         * Color Extract
         * ${pluralize('unique color', this.props.colorsList.length, true)} found, with ${pluralize('named colors', Object.keys(this.props.namedColors).length, true)}.
         */

        `.replace(/ {8}/g, '');

      /* WIP: Toggle Hack. */
      const cssFormat = 'scss';
      if ( cssFormat === 'postcss' ) {
        cssOutput += `:root {\n${Object.keys(this.props.namedColors).map((name) => `  --color-${name}: ${this.props.namedColors[name]};\n`).join('')}}`;
      } else {
        cssOutput += `${Object.keys(this.props.namedColors).map((name) => `$color-${name}: ${this.props.namedColors[name]};\n`).join('')}`;
      }

      return cssOutput;
    }

    /* Return placeholder results text. */
    return '/* Paste your text in the input area to see the color variables here. */';
  }

  render() {

    const inputTextOptions = {
      // Class modifier
      slug: 'paste-area',
      // Heading Text
      headingText: 'Input Area',
      // Label
      formLabel: 'Paste your text here to extract colors.',
      // Status
      status: this.props.classStatus,
      // Window Title
      windowTitle: 'input.txt',
      // Value
      textValue: '',
      // Attribute Options
      attributes: {
        // Read-only?
        readOnly: false,
        // Spell Check?
        spellCheck: false,
        // Change Handler
        onChange: this.handleChange
      }
    };

    const resultsTextOptions = {
      // Class modifier
      slug: 'css-colors',
      // Heading Text
      headingText: 'Named CSS Color Variables',
      // Label
      formLabel: false,
      // Status
      status: this.props.classStatus,
      // Window Title
      windowTitle: 'colors.css',
      // Value
      textValue: this.getCssText(),
      // Show Copy Button?
      copyButton: true,
      // Attribute Options
      attributes: {
        // Read-only?
        readOnly: true,
        // Spell Check?
        spellCheck: false,
        // Change Handler
        onChange: () => {}
      }
    };

    return(
      <div className={`color-extract color-extract--${this.props.classStatus}`}>
        <div className="color-extract__paste">
          <TextWindow textOptions={inputTextOptions}/>
        </div>
        <div className="color-extract__results">
          <TextWindow textOptions={resultsTextOptions} colorsListLength={this.props.colorsList.length}/>
          {(this.props.hasInput && 0 < this.props.colorsList.length && 0 < Object.keys(this.props.namedColors).length) &&
            <ColorSwatches colorsList={this.props.colorsList} />
          }
        </div>
      </div>
    );
  }
}

export default ColorExtract;
