/**
 * Text Window
 *
 * The textarea for pasting the mixed CSS input text.
 */

import React from 'react';
import { ReactComponent as IconCopy } from '../../images/copy.svg';
import { onClickCopy } from '../../utilities/color.js';
import './style.scss';

class TextWindow extends React.Component {

  render() {

    const maybeSetValue = ('' !== this.props.textOptions.textValue && this.props.textOptions.attributes.readOnly) ? { value: this.props.textOptions.textValue} : {};
    const confirmShowCopy = (this.props.textOptions.copyButton && this.props.colorsListLength > 0) ? true : false;

    return(
      <div className={`text-window text-window--${this.props.textOptions.slug} text-window--${this.props.textOptions.status}`}>
        <header className="text-window__header">
          <h2 className="text-window__heading">{this.props.textOptions.headingText}</h2>
          <span className="text-window__window-title">{this.props.textOptions.windowTitle}</span>
          {confirmShowCopy &&
            <button className="text-window__copy-button" onClick={() => onClickCopy(document.getElementById(`text-window-${this.props.textOptions.slug}`).value)}>Copy css color variables.<IconCopy /></button>
          }
        </header>
        <div className="text-window__wrapper">
          <textarea
            className="text-window__textarea"
            id={`text-window-${this.props.textOptions.slug}`}
            name={`text-window-${this.props.textOptions.slug}`}
            {...this.props.textOptions.attributes}
            {...maybeSetValue}
          ></textarea>
          {this.props.textOptions.formLabel &&
            <label className="text-window__label" htmlFor="text-window">
              {this.props.textOptions.formLabel}
            </label>
          }
        </div>
      </div>
    );
  }
}

export default TextWindow;
