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

class ColorSwatch extends React.Component {

  render() {

    const { color: hexColor } = this.props;
    const colorStyle = { '--swatch-color': hexColor };
    const color = new Color(hexColor);

    return(
      <div className="color-swatch" style={colorStyle}>
        <span className="color-swatch__chip"></span>
        <div className="color-swatch__data">
          <h3 className="color-swatch__name">
            {ntc(hexColor).colorName}
          </h3>
          <ul className="color-swatch__list">
            <li className="color-swatch__list-item">
              <label className="color-swatch__label">SCSS</label>
              <input type="text" className="color-swatch__value" value={scssString(hexColor)} readOnly />
            </li>
            <li className="color-swatch__list-item">
              <label className="color-swatch__label">PostCSS</label>
              <input type="text" className="color-swatch__value" value={postcssString(hexColor)} readOnly />
            </li>
            <li className="color-swatch__list-item">
              <label className="color-swatch__label">Hex</label>
              <input type="text" className="color-swatch__value" value={hexColor} readOnly />
            </li>
            <li className="color-swatch__list-item">
              <label className="color-swatch__label">RGB</label>
              <input type="text" className="color-swatch__value" value={color.rgb().string()} readOnly />
            </li>
            <li className="color-swatch__list-item">
              <label className="color-swatch__label">HLS</label>
              <input type="text" className="color-swatch__value" value={color.hsl().round().string()} readOnly />
            </li>
            <li className="color-swatch__list-item">
              <label className="color-swatch__label">CMYK</label>
              <input type="text" className="color-swatch__value" value={cmykString(color)} readOnly />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ColorSwatch;
