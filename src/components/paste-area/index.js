/**
 * Paste Area
 *
 * The textarea for pasting the mixed CSS input text.
 */

import React from 'react';
import './style.scss';

class PasteArea extends React.Component {

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
    return(
      <div className="paste-area">
        <textarea
          id="paste-area"
          name="paste-area"
          className="paste-area__textarea"
          onChange={this.handleChange}
        ></textarea>
        <label className="paste-area__label" htmlFor="paste-area">Paste your mixed CSS into the textarea to extract the colors.</label>
      </div>
    );
  }
}

export default PasteArea;
