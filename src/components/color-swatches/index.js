/**
 * Color Swatches
 *
 * .
 */

import React from 'react';
import Swatch from '../swatch';
import './style.scss';

class ColorSwatches extends React.Component {
  render() {
    return(
      <div className="color-swatches">
        <h2>Color Swatches</h2>
        <ul className="color-swatches__list">
        {this.props.colorsList.map((colorKey) => {
          return(
            <li key={colorKey} className="color-swatches__list-item">
              <Swatch color={colorKey} />
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default ColorSwatches;
