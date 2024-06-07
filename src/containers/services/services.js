import { healthServices } from '../../mock/healthServices';
import './services.css';

const EachService = ({ title, img, desc }) => {
	return (
		<div className='each-service'>
			<div class='eb-infobox-dvwldye eb-infobox-wrapper'>
				<div class='infobox-wrapper-inner'>
					<div class='icon-img-wrapper'>
						<div class='eb-infobox-image-wrapper'>
							<img
								decoding='async'
								class='eb-infobox-image'
								src={img}
								alt={title}
							/>
						</div>
					</div>
					<div class='contents-wrapper'>
						<h2 class='service-title'>{title}</h2>
						<p class='service-description'>{desc}</p>
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
