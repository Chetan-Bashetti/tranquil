import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import MuiButton from '../../components/Button/MuiButton';
import MuiModal from '../../components/Modal/MuiModal';
import { ContextHelth } from '..';

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
					What Tranquil needs is more sunlight, more candor, and more unashamed
					conversation.
				</div>
				<div style={{ marginTop: '3em' }}>
					<MuiButton title='Make appointment' onClick={handleOpen} />
				</div>
			</div>
		</>
	);
};

const Banner = ({ setSnackBar }) => {
	const { frame } = React.useContext(ContextHelth);

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<div className='banner-wrapper' id='home'>
			<NavBar />
			<div className='banner-content'>
				<div
					className={'banner-image'}
					style={{ backgroundColor: frame === 1 ? 'var(--primary-bg)' : '' }}
				>
					<BannerDescription
						name={'banner-product-description-mobile'}
						handleOpen={handleOpen}
						frame={frame}
					/>
				</div>
				<BannerDescription
					name={'banner-product-description'}
					handleOpen={handleOpen}
					frame={frame}
				/>
			</div>

			<MuiModal children={<>Hi</>} open={open} handleClose={handleClose} />
		</div>
	);
};

export default Banner;