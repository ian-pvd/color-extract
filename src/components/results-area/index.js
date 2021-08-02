/**
 * Results Area
 *
 * .
 */

import React from 'react';
import ColorSwatch from '../color-swatch';
import './style.scss';

class ResultsArea extends React.Component {
  render() {
    return(
      <div className="results-area">
        List of Colors
        <ul className="results-area__list">
        {this.props.colorsList.map((colorKey) => {
          return(
            <li key={colorKey} className="results-area__list-item">
              <ColorSwatch color={colorKey} />
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default ResultsArea;
