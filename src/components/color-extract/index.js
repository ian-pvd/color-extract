/**
 * Color Extract
 *
 * The primary app area, with columns for pasting and viewing colors.
 */

import React from 'react';
import TextWindow from '../text-window';
import ResultsArea from '../results-area';
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

  render() {

    const textOptions = {
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

    return(
      <div className={`color-extract color-extract--${this.props.classStatus}`}>
        <div className="color-extract__paste">
          <TextWindow textOptions={textOptions}/>
        </div>
        <div className="color-extract__results">
          <ResultsArea
            colorsList={this.props.colorsList}
            namedColors={this.props.namedColors}
            hasInput={this.props.hasInput}
            classStatus={this.props.classStatus}
          />
        </div>
      </div>
    );
  }
}

export default ColorExtract;
