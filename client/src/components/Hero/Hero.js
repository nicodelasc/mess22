import './Hero.css';

import Pusss from '../../assets/img/puss.jpg';
function Hero() {
	return (
		<section className='section-hero' id="heroid">
			<div className='section-hero-content' >
				<div className='text-box'>
					<h1 className='heading-primary'>I am Nicholas</h1>
					<p className='description'>
						A full time student at SMU web developer and a half-stack programmer.
					</p>
				</div>

				<div className='img-box'>
					<img src={Pusss} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Hero;


