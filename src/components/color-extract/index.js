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
  render() {
    return(
      <div className={`color-extract color-extract--${this.props.classStatus}`}>
        <div className="color-extract__paste">
          <PasteArea extractColors={this.props.extractColors} classStatus={this.props.classStatus}/>
        </div>
        <div className="color-extract__results">
          <ResultsArea colorsList={this.props.colorsList} namedColors={this.props.namedColors} />
        </div>
      </div>
    );
  }
}

export default ColorExtract;
