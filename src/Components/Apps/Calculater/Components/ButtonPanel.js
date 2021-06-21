import React, { useState } from 'react';
import { BtnDetails } from './BtnDetails';
import Button from './Button';

function ButtonPanel({ btnClick }) {

	return(
		<div className="btnPanel">
			{
				BtnDetails.map((btn) => {
					return(<Button 
						onClick={ () => btnClick(btn.Cname ? btn.Cname : null, btn.value)} 
						cName={btn.Cname ? btn.Cname : null}
						value={btn.value ? btn.value : null}
						display={btn.display}
					/>)
				})
			}
		</div>
	)
}

export default ButtonPanel;