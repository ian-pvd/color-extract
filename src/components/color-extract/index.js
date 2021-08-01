/**
 * Color Extract
 *
 * The primary app area, with columns for pasting and viewing colors.
 */

import PasteArea from '../paste-area';
import ResultsArea from '../results-area';
import './style.scss';

function ColorExtract() {
	return(
		<div className="color-extract">
			<div className="color-extract__paste"><PasteArea /></div>
			<div className="color-extract__results"><ResultsArea /></div>
		</div>
	);
}

export default ColorExtract;
