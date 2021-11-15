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

  // TODO: The markup and styles used by this "paste area" component need to be
  // replicated for the named color values section. It should be re-created as
  // a reusable component.

  render() {
    return(
      <div className={`paste-area paste-area--${this.props.classStatus}`}>
        <header className="paste-area__header">
          <h2 class="paste-area__heading">Input Area</h2>
          <span class="paste-area__window-title">input.txt</span>
        </header>
        <div className="paste-area__wrapper">
          <textarea
            className="paste-area__textarea"
            id="paste-area-textarea"
            name="paste-area-textarea"
            onChange={this.handleChange}
            spellCheck="false"
          ></textarea>
          <label className="paste-area__label" htmlFor="paste-area">
            Paste your text here to extract colors.
          </label>
        </div>
      </div>
    );
  }
}

export default PasteArea;
