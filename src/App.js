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
        <section className="section">
          <h2 className="section-heading">About</h2>
          <p className="section-text">Paste in garbage text, Color Extract uses regex to find HEX colors. Color values will be de-duped. Each unique color value gets a swatch. A list of stylesheet-ready variables will be created, which consolidates similar color values into a single color name.</p>
          <p className="section-text">Generated CSS will have tabs for PostCSS, SCSS, SASS & LESS. Users will have the option of changing the set of named colors. Another option would change whether or not the color names should be consolidated or suffixed with strings like "-dark" or "-very-light"</p>
        </section>
        <section className="section">
          <h2 className="section-heading">Colophon</h2>
        </section>
        <section className="section">
          <h2 className="section-heading">Credits & Copyright</h2>
        </section>
      </div>
    );
  }
}

export default App;
