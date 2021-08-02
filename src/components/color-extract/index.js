/**
 * Color Extract
 *
 * The primary app area, with columns for pasting and viewing colors.
 */

import React from 'react';
import PasteArea from '../paste-area';
import ResultsArea from '../results-area';
import './style.scss';

class ColorExtract extends React.Component {

  constructor(props) {
    super(props);
    this.state = {colorsList: []};
  }

  render() {
    return(
      <div className="color-extract">
        <div className="color-extract__paste" colorsList={this.colorsList}>
          <PasteArea />
        </div>
        <div className="color-extract__results">
          <ResultsArea colorsList={this.colorsList} />
        </div>
      </div>
    );
  }
}

export default ColorExtract;
