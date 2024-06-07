import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { qna } from '../../mock/qna';

import './qna.css';

const EachQA = ({ question, answer }) => {
	return (
		<div>
			<Accordion
				style={{
					background: '#f4f9fd',
					margin: '1em 0',
					boxShadow: 'none'
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1-content'
					id='panel1-header'
					style={{ fontWeight: '500' }}
				>
					{question}
				</AccordionSummary>
				<AccordionDetails style={{ background: 'white' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

const Qna = () => {
	return (
		<div
			className='about-us-wrapper'
			id='services'
			style={{ padding: '1em 0' }}
		>
			<div className='about-us-title' style={{ margin: '0' }}>
				FAQ
			</div>
			<div className='qna-wrapper'>
				{qna.map((eachQna) => (
					<EachQA question={eachQna.question} answer={eachQna.answer} />
				))}
			</div>
		</div>
	);
};

export default Qna;
