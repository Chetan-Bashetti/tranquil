import { team } from '../../mock/team';
import './ourteam.css';

const Team = ({ name, designation, gender, desc }) => {
	return (
		<div className='team-main-wrapper'>
			<div className={gender === 'M' ? 'member-image mg' : 'member-image fg'}>
				<img
					style={{ height: '200px' }}
					src={require(gender === 'M'
						? '../../assets/images/dr-male.png'
						: '../../assets/images/dr-female.webp')}
					alt='Doctor'
				/>
			</div>
			<div className='member-name center-text'>{name}</div>
			<div className='member-designation center-text'>{designation}</div>
			<div className='member-desc center-text'>{desc}</div>
		</div>
	);
};

const OurTeam = () => {
	return (
		<div className='about-us-wrapper' id='team'>
			<div className='about-us-title'>Our Team</div>
			<div className='team-data'>
				{team?.map((eachMember) => (
					<Team
						name={eachMember.name}
						designation={eachMember.designation}
						gender={eachMember.gender}
						desc={eachMember.desc}
						key={eachMember.name}
					/>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
