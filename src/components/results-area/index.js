/**
 * Results Area
 *
 * .
 */

import React from 'react';
import pluralize from 'pluralize';
import NamedColors from '../named-colors';
import ColorSwatches from '../color-swatches';
import './style.scss';

class ResultsArea extends React.Component {
  render() {
    return(
      <div className="results-area">
        {(0 < this.props.colorsList.length && 0 < Object.keys(this.props.namedColors).length) ?
          <>
            <div className="results-area__info">
              {pluralize('unique color', this.props.colorsList.length, true)} found with {pluralize('color name variables', Object.keys(this.props.namedColors).length, true)}
            </div>
            <NamedColors namedColors={this.props.namedColors} />
            <ColorSwatches colorsList={this.props.colorsList} />
          </>
        :
          <p>Paste something to see a result.</p>
        }
      </div>
    );
  }
}

export default ResultsArea;
