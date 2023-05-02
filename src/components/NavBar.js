import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div className='nav-bar'>
			<img
				className='texas-ranch-sales-logo'
				src='https://www.texasranchsalesllc.com/wp-content/uploads/TRS-images/cropped-LOGO_TRS-sqrGrn-web.png'
				alt=''
			/>
			<br />
			<Link to='/'>Home</Link>
			<Link to='/about-us'>About Us</Link>
			<Link to='/properties'>Properties</Link>
			<Link to='/map-view'>Map View</Link>
			<Link to='/blog'>Blog</Link>
			<Link to='/our-partners'>Our Partners</Link>
			<Link to='/contact'>Contact</Link>
		</div>
	);
}

export default NavBar;
