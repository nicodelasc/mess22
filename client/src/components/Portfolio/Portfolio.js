import './Portfolio.css';

import project1 from '../../assets/portfolio/project1.jpg';
import project2 from '../../assets/portfolio/project2.jpg';
import project3 from '../../assets/portfolio/project3.jpg';
import project4 from '../../assets/portfolio/project4.jpg';
import project5 from '../../assets/portfolio/project5.jpg';
import project6 from '../../assets/portfolio/project6.jpg';

import Project from './Project.js';
const projects = [
	{
		id: 1,
		title: 'Lorem ipsum dolor',
		src: project1,
		skill: 'Web Design',
		date:
			new Date().getDate() +
			' ' +
			new Date().getMonth() +
			1 +
			' ' +
			new Date().getFullYear(),
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor',
		src: project2,
		skill: 'Mobile App',
		date:
			new Date().getDate() +
			' ' +
			new Date().getMonth() +
			1 +
			' ' +
			new Date().getFullYear(),
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor',
		src: project3,
		skill: 'Modern Web',
		date:
			new Date().getDate() +
			' ' +
			new Date().getMonth() +
			1 +
			' ' +
			new Date().getFullYear(),
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor',
		src: project4,
		skill: 'Responsive Web',
		date:
			new Date().getDate() +
			' ' +
			new Date().getMonth() +
			1 +
			' ' +
			new Date().getFullYear(),
	},
	{
		id: 5,
		title: 'Lorem ipsum dolor',
		src: project5,
		skill: 'Avanced Website',
		date:
			new Date().getDate() +
			' ' +
			new Date().getMonth() +
			1 +
			' ' +
			new Date().getFullYear(),
	},
	{
		id: 6,
		title: 'Lorem ipsum dolor',
		src: project6,
		skill: 'Web App',
		date:
			new Date().getDate() +
			' ' +
			new Date().getMonth() +
			1 +
			' ' +
			new Date().getFullYear(),
	},
];
function Portfolio() {
	return (
		<section className='section-portfolio'>
			<div className='portfolio-container'>
				<h2 className='heading-secondary text-align-center'>Portfolio</h2>
				<p className='text-align-center'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
					velit.
				</p>
				<div className='projects grid grid--col-3'>
					{projects.map((proj) => {
						return <Project project={proj} />;
					})}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
