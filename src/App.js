/**
 * Color Extract React App
 */

/* Component dependencies. */
import Branding from './components/branding';
import ColorExtract from './components/color-extract';

/* Style dependencies. */
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Branding />
      <ColorExtract />
      <p>Colophon</p>
      <p>Credits & Copyright</p>
    </div>
  );
}

export default App;
