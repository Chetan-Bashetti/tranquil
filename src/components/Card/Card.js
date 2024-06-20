import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import WorkingProfessional from '../../assets/images/working-professional.avif';
import Individual from '../../assets/images/individual.jpg';
import Student from '../../assets/images/student.avif';
import Parent from '../../assets/images/parent.avif';
import Organization from '../../assets/images/orginization.jpg';
import Educational from '../../assets/images/eductional.avif';
import Corporate from '../../assets/images/corprate.jpg';
import Other from '../../assets/images/other.avif';

import './Card.css';

const Card = ({ isSelcted, data, handleSelect }) => {
	const images = {
		individual: Individual,
		student: Student,
		working_professional: WorkingProfessional,
		parent: Parent,
		organization: Organization,
		educational: Educational,
		corporate: Corporate,
		other: Other
	};

	return (
		<div
			className={
				isSelcted ? 'selection-card-wrapper selected' : 'selection-card-wrapper'
			}
			onClick={() => handleSelect(data.key, data.next)}
		>
			{isSelcted ? (
				<CheckCircleIcon style={{ color: '#1f5ae3' }} />
			) : (
				<RadioButtonUncheckedIcon style={{ color: '#bcc1c5' }} />
			)}
			<div className='card-content'>
				<img src={images[data.key]} alt='module' className='card-image' />
				<div className='selection-card-details'>
					<div className='selection-title'>{data.title}</div>
					<div className='selection-sub-title'>
						You belong to some orginazation
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
