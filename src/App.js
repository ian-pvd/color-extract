/**
 * Color Extract React App
 */

/* React dependencies. */
import React from 'react';

/* Component dependencies. */
import Branding from './components/branding';
import ColorExtract from './components/color-extract';
import { findColors, getNamedColors } from './utilities/color.js';

/* Style dependencies. */
import './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colorsList: [],
      namedColors: {},
    }
  }

  extractColors = (input) => {
    const colorsList = findColors(input);
    this.setState({ colorsList: colorsList, namedColors: getNamedColors(colorsList) });
  };

  render() {
    return (
      <div className="app">
        <Branding />
        <ColorExtract extractColors={this.extractColors} colorsList={this.state.colorsList} namedColors={this.state.namedColors} />
        <p>Colophon</p>
        <p>Credits & Copyright</p>
      </div>
    );
  }
}

export default App;
