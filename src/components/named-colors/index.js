/**
 * Named Colors
 *
 * .
 */

import React from 'react';
import './style.scss';

class NamedColors extends React.Component {
  render() {
    const styles = `:root {\n\t${Object.keys(this.props.namedColors).map((name) => [`--color-${name}`, this.props.namedColors[name]].join(': ')).join(';\n\t')};\n}`;
    return(
      <div className="named-colors">
        <h2>Named Color Variables</h2>
        <textarea className="named-colors__postcss" value={styles} readOnly></textarea>
      </div>
    );
  }
}

export default NamedColors;
