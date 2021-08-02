/**
 * Results Area
 *
 * .
 */

import React from 'react';
import Color from '../color';
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
              <Color color={colorKey} />
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default ResultsArea;
