import React from 'react';
import Card from 'components/Card/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './appointment.css';
import { appointmentArch } from 'mock/appointment';
import QueryForm from 'components/QueryForm/QueryForm';

const Appointment = () => {
	const [stepper, serStepper] = React.useState({ current: 0, breadCrumb: [] });
	const [questions, setQuestions] = React.useState([]);

	const handleBackgroundSelection = (value) => {
		serStepper({
			...stepper,
			breadCrumb: stepper.current === 0 ? [value] : []
		});
		setTimeout(() => {
			serStepper({
				current: stepper.current + 1,
				breadCrumb: stepper.current === 0 ? [value] : []
			});
		}, 1000);
	};

	const handleProffessionSelction = (value, next) => {
		serStepper({
			...stepper,
			breadCrumb: stepper.current === 1 ? [stepper.breadCrumb[0], value] : []
		});
		setTimeout(() => {
			setQuestions(next);
			serStepper({
				current: stepper.current + 1,
				breadCrumb: stepper.current === 1 ? [stepper.breadCrumb[0], value] : []
			});
		}, 1000);
	};

	const handleBackDrop = () => {
		if (stepper.current === 1)
			serStepper({
				current: 0,
				breadCrumb: stepper.breadCrumb
			});
		if (stepper.current === 2)
			serStepper({
				current: 1,
				breadCrumb: stepper.breadCrumb
			});
	};

	return (
		<div>
			<div className='form-logo'>Tranquil</div>
			<div className='form-header'>
				<ArrowBackIcon
					style={{ position: 'absolute', left: '35px', cursor: 'pointer' }}
					onClick={() => handleBackDrop()}
				/>
				{stepper.current === 0 && 'Your Background'}
				{stepper.current === 1 && 'Your Proffession'}
				{stepper.current === 2 && 'Evaluate your self'}
			</div>
			<div>
				{stepper.current === 0 && (
					<div className='selections-container'>
						{appointmentArch.map((eachArch) => (
							<Card
								isSelcted={stepper.breadCrumb[0] === eachArch.key}
								data={eachArch}
								key={eachArch.key}
								handleSelect={handleBackgroundSelection}
							/>
						))}
					</div>
				)}
				{stepper.current === 1 && (
					<div className='selections-container'>
						{appointmentArch[
							appointmentArch.findIndex(
								(eachA) => eachA.key === stepper.breadCrumb[0]
							)
						]['next'].map((eachArch) => (
							<Card
								isSelcted={stepper.breadCrumb[1] === eachArch.key}
								data={eachArch}
								key={eachArch.key}
								handleSelect={handleProffessionSelction}
							/>
						))}
					</div>
				)}
				{stepper.current === 2 && <QueryForm questions={questions} />}
			</div>
		</div>
	);
};
export default Appointment;
