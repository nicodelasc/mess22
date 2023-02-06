import './AboutMe.css';

import userProfileImg from '../../assets/img/userProfile.jpg';

import SkillBar from '../skillbars/SkillBar';
function AboutMe() {
	return (
		<section className='section-about-me' id="aboutmeid">
			<div className='about-me-content container'>
				<div className='about-me-card'>
					<div className='basic-data'>
						<div className='bio-data'>
							<div className='img-box'>
								<img className='img-user-profile' src={userProfileImg} alt='' />
							</div>
							<div className='bio-text-box'>
								<p className='bio-data-row'>
									<strong>Name: </strong> <span>Nicholas</span>
								</p>
								<p className='bio-data-row'>
									<strong>School: </strong> <span>Singapore Management University</span>
								</p>
								<p className='bio-data-row'>
									<strong>Email: </strong> sychua.2021@scis.smu.edu.sg
								</p>
								<p className='bio-data-row'>
									<strong>Phone:</strong> 91123698
								</p>
							</div>
						</div>

						<div className='skill-bars'>
							<h3 className='ter-heading'>Skills</h3>
							<div className='skill'>
								<p className='skill-title'>HTML 50%</p>
								<SkillBar skillPer='50%' />
							</div>

							<div className='skill'>
								<p className='skill-title'>CSS 45%</p>
								<SkillBar skillPer='45%' />
							</div>

							<div className='skill'>
								<p className='skill-title'>JavaScirpt 40%</p>
								<SkillBar skillPer='40%' />
							</div>

							<div className='skill'>
								<p className='skill-title'>React 20%</p>
								<SkillBar skillPer='20%' />
							</div>
						</div>
					</div>
					<div className='about-text'>
						<h2 className='heading-secondary'>About Me</h2>
						<p>
							I am a year 2 IS student from SIngapore Management University majoring in DCS
						</p>
						<p>
							i have an interest in Web development, data analytics, product management and internships Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
							aperiam fugit ipsum voluptatibus optio consequatur deleniti
							evenie.
						</p>

						<p>
							I enjoy macdonalds, stand-up commedy and macdonalds  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
							aperiam fugit ipsum voluptatibus optio consequatur deleniti
							eveniet at 
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
