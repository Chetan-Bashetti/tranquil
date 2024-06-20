import React from 'react';
import Button from 'components/Button/MuiButton';
import { checkIsNumber } from 'module/isNumber';

import './QueryForm.css';
import { phoneNumer } from 'mock/phone';

const Input = ({ placeholder, value, onChange, maxLength, type }) => {
	return (
		<input
			className='input-field'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			maxLength={maxLength}
			type={type}
		/>
	);
};

const QueryForm = () => {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [queryDesc, setQueryDesc] = React.useState('');
	const [date, setDate] = React.useState('');

	const handleCreateQuery = async () => {
		if (name === '') {
			alert('Please enter you name');
			return;
		}
		if (phone === '' || phone.length !== 10) {
			alert('Please enter 10 digit phone number');
			return;
		}
		if (date === '') {
			alert('Please enter appoitment date');
			return;
		}
		if (queryDesc === '') {
			alert('Please write your query');
			return;
		}

		window.open(
			`https://wa.me/${phoneNumer}?text=Hi, My name is ${name} my query is ${queryDesc} i want book an appoitment on ${date}`,
			'_blank'
		);
	};

	const handleTextField = (e, setter) => {
		const { value } = e.target;
		console.log(value);
		setter(value);
	};

	const handleFieldOnchange = (e, setter) => {
		const isNumber = checkIsNumber(e.target.value, setter);
		if (isNumber) setter(e.target.value);
	};

	return (
		<div className='query-form-wrapper'>
			<div className='form-fields'>
				<div className='field-container'>
					<label>user name</label>
					<Input
						placeholder='User name'
						value={name}
						onChange={(e) => handleTextField(e, setName)}
					/>
				</div>
				<div className='field-container'>
					<label>phone number</label>
					<Input
						placeholder='Phone number'
						value={phone}
						onChange={(e) => handleFieldOnchange(e, setPhone)}
						maxLength={10}
					/>
				</div>
				<div className='field-container'>
					<label>date - time</label>
					<Input
						placeholder='Date'
						value={date}
						onChange={(e) => handleTextField(e, setDate)}
						type={'datetime-local'}
					/>
				</div>
				<div className='field-container'>
					<label>Write the Query in brief </label>
					<textarea
						className='input-field'
						placeholder='Query'
						value={queryDesc}
						onChange={(e) => setQueryDesc(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-actions'>
				<Button title='Cancel' style={{ margin: '0.5em 1em' }} />
				<Button
					title='Send'
					style={{ margin: '0.5em 1em' }}
					onClick={handleCreateQuery}
				/>
			</div>
		</div>
	);
};

export default QueryForm;
