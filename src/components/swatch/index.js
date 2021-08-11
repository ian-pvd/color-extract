/**
 * Color
 *
 * A single color swatch.
 */
import React from 'react';
import Color from 'color';
import ntc from '@yatiac/name-that-color';

import { scssString, postcssString, cmykString } from '../../utilities/color.js';
import './style.scss';

class Swatch extends React.Component {

  render() {

    const { color: hexColor } = this.props;
    const colorStyle = { '--swatch-color': hexColor };
    const color = new Color(hexColor);

    return(
      <div className="swatch" style={colorStyle}>
        <span className="swatch__chip"></span>
        <div className="swatch__data">
          <h3 className="swatch__name">
            {ntc(hexColor).colorName}
          </h3>
          <ul className="swatch__list">
            <li className="swatch__list-item">
              <label className="swatch__label">SCSS</label>
              <input type="text" className="swatch__value" value={scssString(hexColor)} readOnly />
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">PostCSS</label>
              <input type="text" className="swatch__value" value={postcssString(hexColor)} readOnly />
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">Hex</label>
              <input type="text" className="swatch__value" value={hexColor} readOnly />
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">RGB</label>
              <input type="text" className="swatch__value" value={color.rgb().string()} readOnly />
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">HLS</label>
              <input type="text" className="swatch__value" value={color.hsl().round().string()} readOnly />
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">CMYK</label>
              <input type="text" className="swatch__value" value={cmykString(color)} readOnly />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Swatch;
