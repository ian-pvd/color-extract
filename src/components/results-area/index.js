/**
 * Results Area
 *
 * .
 */

import React from 'react';
import pluralize from 'pluralize';
import TextWindow from '../text-window';
import ColorSwatches from '../color-swatches';
import './style.scss';

class ResultsArea extends React.Component {

  getCssText = () => {
    if (this.props.hasInput) {
        return `/* ${pluralize('unique color', this.props.colorsList.length, true)} found, with ${pluralize('color names', Object.keys(this.props.namedColors).length, true)} */\n\n:root {\n${Object.keys(this.props.namedColors).map((name) => `\t--color-${name}: ${this.props.namedColors[name]};\n`).join('')}}`;
    }
    return '/* Paste your text in the input area to see the color variables here. */';
  }

  render() {

    const textOptions = {
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
      // Attribute Options
      attributes: {
        // Read-only?
        readOnly: true,
        // Spell Check?
        spellCheck: false,
        // Change Handler
        onChange: this.handleChange
      }
    };

    return(
      <div className="results-area">
        <TextWindow textOptions={textOptions}/>
        {(this.props.hasInput && 0 < this.props.colorsList.length && 0 < Object.keys(this.props.namedColors).length) &&
          <ColorSwatches colorsList={this.props.colorsList} />
        }
      </div>
    );
  }
}

export default ResultsArea;
