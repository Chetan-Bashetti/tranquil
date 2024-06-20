import { healthServices } from '../../mock/healthServices';
import './services.css';

const EachService = ({ title, img, desc }) => {
	return (
		<div className='each-service'>
			<div className='eb-infobox-dvwldye eb-infobox-wrapper'>
				<div className='infobox-wrapper-inner'>
					<div className='icon-img-wrapper'>
						<div className='eb-infobox-image-wrapper'>
							<img
								decoding='async'
								className='eb-infobox-image'
								src={img}
								alt={title}
							/>
						</div>
					</div>
					<div className='contents-wrapper'>
						<h2 className='service-title'>{title}</h2>
						<p className='service-description'>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<div className='about-us-wrapper' id='services'>
			<div className='about-us-title'>Our Services</div>
			<div className='our-services'>
				{healthServices.map((eachService) => (
					<EachService
						key={eachService.key}
						title={eachService.title}
						img={eachService.img}
						desc={eachService.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
