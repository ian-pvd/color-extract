/**
 * Color Extract React App
 */

/* React dependencies. */
import React from 'react';

/* Component dependencies. */
import Branding from './components/branding';
import ColorExtract from './components/color-extract';
import { getColors, namedColors } from './utilities/color.js';

/* Style dependencies. */
import './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colorsList: [],
      namedColors: [],
    }
  }

  extractColors = (input) => {
    this.setState({ colorsList: getColors(input)});
    console.log(namedColors(getColors(input)));
  };

  render() {
    return (
      <div className="app">
        <Branding />
        <ColorExtract extractColors={this.extractColors} colorsList={this.state.colorsList} />
        <p>Colophon</p>
        <p>Credits & Copyright</p>
      </div>
    );
  }
}

export default App;
