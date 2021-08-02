/**
 * Color
 *
 * A single color swatch.
 */
import React from 'react';
import './style.scss';

class Color extends React.Component {

  render() {

    const colorStyle = { '--color': this.props.color };

    return(
      <div className="color" style={colorStyle}>
        {this.props.color}
      </div>
    );
  }
}

export default Color;
