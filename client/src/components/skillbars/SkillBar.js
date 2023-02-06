import './SkillBar.css';
function SkillBar(props) {
	return (
		<p className='skill-bar'>
			<p className='skill-bar-per' style={{ width: props.skillPer }}></p>
		</p>
	);
}

export default SkillBar;
