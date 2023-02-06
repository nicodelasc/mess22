import React, { useReducer } from 'react';
import './Form.css';

import { sendMessage } from '../../api/contact.js';
const intitialState = {
	message: {
		name: '',
		email: '',
		body: '',
	},
};
const reducer = (state, action) => {
	const prevState = { ...state };
	const value = action.payload.value;
	const type = action.type;

	if (type === 'NAME_INPUT') {
		prevState.message.name = value;
	} else if (type === 'EMAIL_INPUT') {
		prevState.message.email = value;
	} else {
		prevState.message.body = value;
	}
	return state;
};

const Form = () => {
	const [state, dispatch] = useReducer(reducer, intitialState);

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const response = await sendMessage(state.message);
			if (response.success) {
				alert('Message sent successfully, Thanks!');

				state.message = {
					name: '',
					email: '',
					body: '',
				};
			}
		} catch (e) {
			alert('Error sending message');
		}
	};
	return (
		<div className='form-container'>
			<div className='form-content'>
				<div className='actual-form'>
					<h3 className='heading-ter'>Leave me a message!</h3>

					<form action='' onSubmit={submitHandler}>
						<input
							type='text'
							placeholder='Your Name'
							onChange={(e) => {
								dispatch({
									type: 'NAME_INPUT',
									payload: {
										value: e.target.value,
									},
								});
							}}
						/>
						<input
							type='email'
							placeholder='Your Email'
							onChange={(e) => {
								dispatch({
									type: 'EMAIL_INPUT',
									payload: {
										value: e.target.value,
									},
								});
							}}
						/>
						<input
							type='text'
							placeholder='Your Message'
							onChange={(e) => {
								dispatch({
									type: 'MESSAGE_INPUT',
									payload: {
										value: e.target.value,
									},
								});
							}}
						/>
						<input type='submit' value='Submit' />
					</form>
				</div>
				<div className='form-description'>
					<h3 className='heading-ter'>Get In Touch</h3>
					<p>
						Contact me for literally anything! Coffee, tea or hackathon, I am always down for anything.

					</p>
					<br></br>
					<p>
						You can catch me on my socials in the links below!
					</p>
					<div className='social-media-icons'>
						<a href=''>
							<ion-icon
								name='logo-facebook'
								style={{ fontSize: '32px', cursor: 'pointer' }}
								className='social-icon'
							></ion-icon>
						</a>
						<a href='https://twitter.com' target='_blank'>
							<ion-icon
								name='logo-twitter'
								style={{ fontSize: '32px', cursor: 'pointer' }}
								className='social-icon'
							></ion-icon>
						</a>
						<a href='https://linkedin.com'>
							<ion-icon
								name='logo-linkedin'
								style={{ fontSize: '32px', cursor: 'pointer' }}
								className='social-icon'
							></ion-icon>
						</a>
						<a href='https://instagram.com'>
							<ion-icon
								name='logo-instagram'
								style={{ fontSize: '32px', cursor: 'pointer' }}
								className='social-icon'
							></ion-icon>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
