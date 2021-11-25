/**
 * Color
 *
 * A single color swatch.
 */

import React from 'react';
import Color from 'color';
import ntc from '@yatiac/name-that-color';
import { ReactComponent as IconCopy } from './copy.svg';

import { scssString, postcssString, cmykString, onClickCopy } from '../../utilities/color.js';
import './style.scss';

class Swatch extends React.Component {

  render() {

    const { color: hexColor } = this.props;
    const colorStyle = { '--swatch-color': hexColor };
    const color = new Color(hexColor);

    return(
      <div className="swatch" style={colorStyle}>
        <button className="swatch__chip" data-color={hexColor} onClick={() => onClickCopy(hexColor)}></button>
        <div className="swatch__data">
          <h3 className="swatch__name">
            {ntc(hexColor).colorName}
          </h3>
          <ul className="swatch__list">
            <li className="swatch__list-item">
              <label className="swatch__label">SCSS</label>
              <input type="text" className="swatch__value" value={scssString(hexColor)} readOnly />
              <button className="swatch__copy-button" onClick={() => onClickCopy(scssString(hexColor))}>Copy SCSS color variable.<IconCopy /></button>
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">PostCSS</label>
              <input type="text" className="swatch__value" value={postcssString(hexColor)} readOnly />
              <button className="swatch__copy-button" onClick={() => onClickCopy(postcssString(hexColor))}>Copy PostCSS color variable.<IconCopy /></button>
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">Hex</label>
              <input type="text" className="swatch__value" value={hexColor} readOnly />
              <button className="swatch__copy-button" onClick={() => onClickCopy(hexColor)}>Copy Hex color code.<IconCopy /></button>
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">RGB</label>
              <input type="text" className="swatch__value" value={color.rgb().string()} readOnly />
              <button className="swatch__copy-button" onClick={() => onClickCopy(color.rgb().string())}>Copy RGB color code.<IconCopy /></button>
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">HLS</label>
              <input type="text" className="swatch__value" value={color.hsl().round().string()} readOnly />
              <button className="swatch__copy-button" onClick={() => onClickCopy(color.hsl().round().string())}>Copy HLS color code.<IconCopy /></button>
            </li>
            <li className="swatch__list-item">
              <label className="swatch__label">CMYK</label>
              <input type="text" className="swatch__value" value={cmykString(color)} readOnly />
              <button className="swatch__copy-button" onClick={() => onClickCopy(cmykString(color))}>Copy CMYK color code.<IconCopy /></button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Swatch;
