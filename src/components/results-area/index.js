/**
 * Results Area
 *
 * .
 */

import './style.scss';

const ResultsArea = ({colorsList}) => {
	return(
		<div className="results-area">
			List of Color Results
			<p>{colorsList}</p>
		</div>
	);
}

export default ResultsArea;
