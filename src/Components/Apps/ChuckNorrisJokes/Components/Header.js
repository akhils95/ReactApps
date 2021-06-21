import React from 'react';
import CNLogo from './CNLogo.svg';

const Header = () => {
	return(
		<div className='center pa4 pv2 bg-dark-blue'>
			<img className='center grow' alt='Chuck_Approved' src={CNLogo} height='200px' width='auto' />
		</div>
	)
}

export default Header;