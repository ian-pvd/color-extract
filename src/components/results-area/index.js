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
        {(this.props.hasInput) ?
          <>
            <p className="results-area__info">
              {pluralize('unique color', this.props.colorsList.length, true)} found, with {pluralize('color names', Object.keys(this.props.namedColors).length, true)}
            </p>
            {
              (0 < this.props.colorsList.length && 0 < Object.keys(this.props.namedColors).length) &&
              <>
                <NamedColors namedColors={this.props.namedColors} />
                <ColorSwatches colorsList={this.props.colorsList} />
               </>
            }
          </>
        :
          <p className="results-area__prompt">Paste your text in the input area to see your results here.</p>
        }
      </div>
    );
  }
}

export default ResultsArea;
