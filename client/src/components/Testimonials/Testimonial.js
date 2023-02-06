import React from 'react';
import './Testimonial.css';
const Testimonial = (props) => {
	return (
		<div className='testimonial'>
			<img src={props.img} alt='testimonial' />
			<p className='text'>{props.text}</p>
			<p className='author'>{props.author}</p>
		</div>
	);
};

export default Testimonial;
