/**
 * Color Extract React App
 */

/* React dependencies. */
import React from 'react';

/* Component dependencies. */
import Header from './components/header';
import ColorExtract from './components/color-extract';
import { findColors, getNamedColors } from './utilities/color.js';

/* Style dependencies. */
import './app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      classStatus: 'inactive',
      colorsList: [],
      namedColors: {},
      hasInput: false,
    }
  }

  extractColors = (input) => {
    if ('' !== input.trim()) {
      const colorsList = findColors(input);
      this.setState(
        {
          classStatus: 'active',
          colorsList: colorsList,
          namedColors: getNamedColors(colorsList),
          hasInput: true,
        }
      );
    } else {
      this.setState(
        {
          classStatus: 'inactive',
          colorsList: [],
          namedColors: {},
          hasInput: false,
        }
      );
    }
  };

  render() {
    return (
      <div className="app">
        <Header />
        <ColorExtract
          classStatus={this.state.classStatus}
          colorsList={this.state.colorsList}
          extractColors={this.extractColors}
          hasInput={this.state.hasInput}
          namedColors={this.state.namedColors}
        />
        <p>Colophon</p>
        <p>Credits & Copyright</p>
      </div>
    );
  }
}

export default App;
