/**
 * Paste Area
 *
 * The textarea for pasting the mixed CSS input text.
 */

import React from 'react';
import { getColors } from './../../utilities/color.js';
import './style.scss';

class PasteArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {colorsList: this.props.colorsList};
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handle Change
   *
   * Process the textarea value on input.
   */
  handleChange = (e) => {
      this.setState({colorsList: getColors(e.target.value)});
  };

  render() {
    return(
      <div className="paste-area">
        <textarea id="paste-area" name="paste-area" className="paste-area__textarea" onChange={this.handleChange}></textarea>
        <label className="paste-area__label" htmlFor="paste-area">Paste your mixed CSS into the textarea to extract the colors.</label>
      </div>
    );
  }
}

export default PasteArea;
