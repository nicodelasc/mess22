import './Project.css';

function Project(props) {
	return (
		<div className='project' id="projectid">
			<div className='project-img'>
				<img src={props.project.src} alt='' />
			</div>
			<div className='project-description'>
				<div className='desc-content'>
					<h3>{props.project.title}</h3>
					<p className='project-info'>
						<span className='skill'>{props.project.skill}</span>
						<span>/ </span> <span>{props.project.date}</span>
					</p>
				</div>
				<button>+</button>
			</div>
		</div>
	);
}

export default Project;
