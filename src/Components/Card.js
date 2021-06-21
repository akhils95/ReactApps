import React from 'react';

const Card = (props) => {
	const { name, thumb } = props;
	return (
		<div className='tc theme_c dib br3 pa3 ma2 ml4 mr4 pointer grow bw2 shadow-5'>
			<img className='thumb' alt={`${name}`} src={thumb} />
			<div>
				<h1>{name}</h1>
			</div>
		</div>
	);
}

export default Card;