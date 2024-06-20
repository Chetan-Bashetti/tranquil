import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealingIcon from '@mui/icons-material/Healing';

import './whyus.css';
import { specility } from '../../mock/specility';

const Spacility = ({ icon, title, desc }) => {
	const icons = {
		key1: <PsychologyAltIcon style={{ fontSize: '2.5em' }} />,
		key2: <PsychologyIcon style={{ fontSize: '2.5em' }} />,
		key3: <HealingIcon style={{ fontSize: '2.5em' }} />
	};

	return (
		<div className='each-spacality'>
			<div className='icon-wrapper'>{icons[icon]}</div>
			<div className='specility-detail'>
				<div className='specility-name'>{title}</div>
				<div className='specility-desc'>{desc}</div>
			</div>
		</div>
	);
};

const WhyUs = () => {
	return (
		<div className='about-us-wrapper' id='why-us'>
			<div className='about-us-title'>Why Us</div>
			<div className='why-us-wrapper'>
				{specility.map((eachSpacility) => (
					<Spacility
						key={eachSpacility.key}
						title={eachSpacility.title}
						icon={eachSpacility.key}
						desc={eachSpacility.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default WhyUs;
