import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import './Card.css';

const Card = ({ isSelcted, data, handleSelect }) => {
	return (
		<div
			className={
				isSelcted ? 'selection-card-wrapper selected' : 'selection-card-wrapper'
			}
			onClick={() => handleSelect(data.key)}
		>
			{isSelcted ? (
				<CheckCircleIcon style={{ color: '#1f5ae3' }} />
			) : (
				<RadioButtonUncheckedIcon style={{ color: '#bcc1c5' }} />
			)}
			<div className='card-content'>
				<img
					src={require('../../assets/images/dr-male.png')}
					alt='module'
					className='card-image'
				/>
				<div className='selection-title'>{data.title}</div>
				<div className='selection-sub-title'>
					You belong to some orginazation
				</div>
			</div>
		</div>
	);
};

export default Card;
