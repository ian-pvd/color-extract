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
        <main>
          <ColorExtract
            classStatus={this.state.classStatus}
            colorsList={this.state.colorsList}
            extractColors={this.extractColors}
            hasInput={this.state.hasInput}
            namedColors={this.state.namedColors}
          />
          <section className="section">
            <h2 className="section-heading">About</h2>
            <p>Paste in your source text, and Color Extract will use regex to find hex colors. The hex codes will be de-duped, and each unique hex code will be displayed as a swatch.</p>
            <p>A list of CSS variables will also be generated. Any hex codes for colors that are similar will be consolidated under a single color name. The generated stylesheet will have tabs which format the variables using PostCSS, SCSS, SASS or LESS syntax.</p>
          </section>
        </main>
        <footer>
          <section className="section">
            <h2 className="section-heading">Colophon</h2>
          </section>
          <section className="section">
            <h2 className="section-heading">Credits & Copyright</h2>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
