import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer'>
				Designed and developed by
				<a
					className='link'
					target='_blank'
					rel='noreferrer'
					href='https://tecnacy.netlify.app/'
					style={{
						marginLeft: '0.3em',
						color: 'white'
					}}
				>
					Tecnacy Solutions
				</a>
			</div>
			<div className='footer-logo'>
				<div className='logo' style={{ padding: '0.5em 0 0 0' }}>
					Tranquil
				</div>
			</div>
		</div>
	);
};

export default Footer;
