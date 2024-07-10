import React from 'react';
import { ContextHelth } from '..';

import NavBar from 'components/Navbar/NavBar';
import MuiButton from 'components/Button/MuiButton';
import MuiModal from 'components/Modal/MuiModal';
import Appointment from 'containers/appointment/appointment';

import './banner.css';

const BannerDescription = ({ name = '', handleOpen, frame }) => {
	return (
		<>
			<div
				className={name}
				style={{ background: frame === 1 ? 'var(--primary-bg)' : '' }}
			>
				<div
					className='product-name'
					style={{ color: frame === 1 ? 'white' : '' }}
				>
					Tranquil
				</div>
				<div
					className='product-desc'
					style={{ color: frame === 1 ? 'white' : '' }}
				>
					What you need is more sunlight, more candor, and more unashamed
					conversation.
				</div>
				<div style={{ marginTop: '3em' }}>
					<MuiButton
						title='Make an appointment'
						onClick={handleOpen}
						style={{
							border: '1px solid white'
						}}
					/>
				</div>
			</div>
		</>
	);
};

const Banner = ({ setSnackBar }) => {
	const { frame } = React.useContext(ContextHelth);

	const [open, setOpen] = React.useState(false);

	const handleModel = () => setOpen(!open);

	return (
		<div
			className='banner-wrapper'
			id='home'
			style={{ backgroundColor: frame === 1 ? 'var(--primary-bg)' : '' }}
		>
			<NavBar />
			<div className='banner-content'>
				<div className={'banner-image'}>
					<BannerDescription
						name={'banner-product-description-mobile'}
						handleOpen={handleModel}
						frame={frame}
					/>
				</div>
				<BannerDescription
					name={'banner-product-description'}
					handleOpen={handleModel}
					frame={frame}
				/>
			</div>

			<MuiModal
				children={<Appointment />}
				open={open}
				handleClose={handleModel}
			/>
		</div>
	);
};

export default Banner;
