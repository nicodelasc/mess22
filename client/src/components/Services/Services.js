import './Services.css';

import Service from './Service';
const services = [
	{
		title: 'Javascript',
		desc: 'a lightweight, interpreted, or just-in-time compiled programming language with first-class functions',
		logo: 'logo-nodejs',
	},
	{
		title: 'CSS',
		logo: 'logo-css3',
		desc: 'the language for describing the presentation of Web pages, including colors, layout, and fonts',
	},
	{
		title: 'IOS App Development',
		logo: 'phone-portrait-outline',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reiciendis amet id autem ipsum fugit cum reprehenderit perspiciatis? Exercitationem excepturi quo facere ab, molestias illum?',
	},
	{
		title: 'Heartcode Mentor',
		logo: 'code-working-outline',
		desc: 'Project HeartCode is a homegrown SCIS community service project that aims to provide underprivileged youths with the opportunity to explore their interest in IT.',
	},
	{
		title: 'Poem Writter',
		logo: 'pencil-outline',
		desc: 'A large red cow Tried to make a bow, But did not know how, They say. For her legs got mixed, And her horns got fixed, And her tail would get In her way',
	},
	{
		title: 'Tech Youtuber',
		logo: 'logo-youtube',
		desc: 'I am not one, but I do enjoy watching them',
	},
];
function Services() {
	return (
		<section className='section-services'>
			<div className='container services-container'>
				<h2 className='heading-secondary text-align-center'>Services</h2>
				<p className='text-align-center'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit
				</p>
				<div className='services-cards grid grid--col-3'>
					{services.map((sev) => {
						return (
							<Service
								serviceTitle={sev.title}
								serviceDescription={sev.desc}
								logo={sev.logo}
								logoSize='64px'
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
export default Services;
