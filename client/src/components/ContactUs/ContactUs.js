import React from 'react';
import './ContactUs.css';
import Form from './Form';
const ContactUs = () => {
	return (
		<section className='section-contact-us' id="contactid">
			<h2 className='heading-secondary text-align-center'>Contact me</h2>
			<div className='contact-us-container container'>
				<Form />
			</div>
		</section>
	);
};

export default ContactUs;
