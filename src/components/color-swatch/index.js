/**
 * Color
 *
 * A single color swatch.
 */
import React from 'react';
import Color from 'color';
import { cmykString } from '../../utilities/color.js';
import './style.scss';

class ColorSwatch extends React.Component {

  render() {

    const { color: hexColor } = this.props;
    const colorStyle = { '--color': hexColor };
    const color = new Color(hexColor);

    return(
      <div className="color-swatch" style={colorStyle}>
        <span className="color-swatch__chip"></span>
        <ul className="color-swatch__data">
          <li className="color-swatch__format">
            <label className="color-swatch__label">Name</label>
            <input type="text" className="color-swatch__value" value={hexColor} readOnly />
          </li>
          <li className="color-swatch__format">
            <label className="color-swatch__label">Hex</label>
            <input type="text" className="color-swatch__value" value={hexColor} readOnly />
          </li>
          <li className="color-swatch__format">
            <label className="color-swatch__label">RGB</label>
            <input type="text" className="color-swatch__value" value={color.rgb().string()} readOnly />
          </li>
          <li className="color-swatch__format">
            <label className="color-swatch__label">HLS</label>
            <input type="text" className="color-swatch__value" value={color.hsl().round().string()} readOnly />
          </li>
          <li className="color-swatch__format">
            <label className="color-swatch__label">CMYK</label>
            <input type="text" className="color-swatch__value" value={cmykString(color)} readOnly />
          </li>
        </ul>
      </div>
    );
  }
}

export default ColorSwatch;
