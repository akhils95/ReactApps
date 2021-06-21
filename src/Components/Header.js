import React from 'react';
import logo from '../logo.svg'
import './Style.css'

const Header = ({onRouteChange}) => {
	return (
		<div className='pa2 ma0 flex items-center justify-between theme_h'>
			<div className='tl w-25'>
				<img className='grow logo pointer' alt={`Logo`} src={logo}  onClick={() => onRouteChange('home')}/>
			</div>
			<div className='tc w-50'>
				<h1 className='f1 pointer'>Mini React Apps Collection</h1>
			</div>
			<div className='w-25'>
				<p onClick={() => onRouteChange('home')} className='f4 link tr pa2 dim pointer'>Home</p>
			</div>
		</div>
	);
}

export default Header;