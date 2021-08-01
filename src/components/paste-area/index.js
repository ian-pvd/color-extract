/**
 * Paste Area
 *
 * The textarea for pasting the mixed CSS input text.
 */

import './style.scss';

function PasteArea(props) {

	return(
		<div className="paste-area">
			<textarea id="paste-area" name="paste-area" className="paste-area__textarea"></textarea>
			<label className="paste-area__label" htmlFor="paste-area">Paste your mixed CSS into the textarea to extract the colors.</label>
		</div>
	);
}

export default PasteArea;
