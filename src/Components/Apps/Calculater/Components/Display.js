import React from 'react';

const Display = ({ dispVal, query }) => {
	return(
		<div className='display'>
			<p className="displayQuery">{query}</p>
			<h1 className="displayResult">{dispVal}</h1>
		</div>
	);
}

export default Display;