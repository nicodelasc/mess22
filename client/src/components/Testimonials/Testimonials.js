import React from 'react';

import user1 from '../../assets/testmonials/profk.jpg';
import user2 from '../../assets/testmonials/profr.jpg';
import user3 from '../../assets/testmonials/profw.jpg';
import './Testimonials.css';

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import AliceCarousel from 'react-alice-carousel';
// Css
import 'react-alice-carousel/lib/alice-carousel.css';

import Testimonial from './Testimonial';
const testimonials = [
	{
		id: 1,
		img: user1,
		text: 'Boo Yah!',
		author: 'Prof Kyong',
	},
	{
		id: 2,
		img: user2,
		text: 'RRReesearch',
		author: 'Prof Rafael',
	},
	{
		id: 3,
		img: user3,
		text: 'Integer',
		author: 'Prof Wu',
	},
];

const items = [
	<Testimonial
		img={testimonials[0].img}
		author={testimonials[0].author}
		text={testimonials[0].text}
	/>,
	<Testimonial
		img={testimonials[1].img}
		author={testimonials[1].author}
		text={testimonials[1].text}
	/>,
	<Testimonial
		img={testimonials[2].img}
		author={testimonials[2].author}
		text={testimonials[2].text}
	/>,
];
const Testimonials = () => {
	return (
		<section className='section-testimonials'>
			<div className='testimonials-content container'>
				<h2 className='heading-secondary text-align-center'>Testimonials</h2>
				<AliceCarousel mouseTracking items={items} />
			</div>
		</section>
	);
};

export default Testimonials;
