import './Services.css';

function Service(props) {
	return (
		<div className='service'>
			{/* <img src='' className='service icon' alt='' /> */}
			<div className='service-icon-container'>
				<ion-icon
					name={props.logo}
					className='service-icon'
					style={{ fontSize: props.logoSize, color: '#333' }}
				></ion-icon>
			</div>
			<h3 className='service-title'>{props.serviceTitle}</h3>
			<p className='service-description'>{props.serviceDescription}</p>
		</div>
	);
}

export default Service;
