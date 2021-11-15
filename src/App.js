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
      colorsList: [],
      namedColors: {},
      classStatus: 'inactive',
    }
  }

  extractColors = (input) => {
    if ('' !== input.trim()) {
      const colorsList = findColors(input);
      this.setState(
        {
          colorsList: colorsList,
          namedColors: getNamedColors(colorsList),
          classStatus: 'active',
        }
      );
    } else {
      this.setState(
        {
          colorsList: [],
          namedColors: {},
          classStatus: 'inactive',
        }
      );
    }
  };

  render() {
    return (
      <div className="app">
        <Header />
        <ColorExtract
          extractColors={this.extractColors}
          colorsList={this.state.colorsList}
          namedColors={this.state.namedColors}
          classStatus={this.state.classStatus}
        />
        <p>Colophon</p>
        <p>Credits & Copyright</p>
      </div>
    );
  }
}

export default App;
