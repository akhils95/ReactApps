import React from 'react';
import Card from './Card';
import { applications } from './List';
import './Style.css';

const CardList = ({onRouteChange}) => {

		return(
			<div className="flex flex-wrap justify-center">
				{
    				applications.map((app,i) => {
						return (
							<div onClick={() => onRouteChange(app.route)}>
								<Card
								name={app.name}
								thumb={app.thumb}
								/>
							</div>
						)
					})
				}
    		</div>
		)
};

export default CardList;