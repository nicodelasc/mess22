import './Navbar.css';
function Navbar() {
	return (
		<nav>
			<a href='#' className='brand'>
				<h3>My Portfolio</h3>
			</a>
			<ul className='main-nav-list'>
				<li>
					<a className='main-nav-link' href='#heroid'>
						Home
					</a>
				</li>
				<li>
					<a className='main-nav-link' href='#aboutmeid'>
						About
					</a>
				</li>
				<li>
					<a className='main-nav-link' href='#projectid'>
						Projects
					</a>
				</li>
				<li>
					<a className='main-nav-link' href='#contactid'>
						Contact Me
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
