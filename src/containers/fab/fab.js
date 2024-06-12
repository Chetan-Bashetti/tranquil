import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './fab.css';
import { Fab } from '@mui/material';
import { phoneNumer } from '../../mock/phone';

const FabIcon = () => {
	return (
		<div className='fab-wrapper'>
			<Fab
				style={{ background: '#01e676' }}
				children={
					<WhatsAppIcon
						style={{ fontSize: '3em', color: 'white' }}
						onClick={() => {
							window.open(
								`https://wa.me/${phoneNumer}?text=Hi, Thank you for contacting Tranquil`,
								'_blank'
							);
						}}
					/>
				}
			/>
		</div>
	);
};

export default FabIcon;
