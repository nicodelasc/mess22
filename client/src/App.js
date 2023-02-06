import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<AboutMe />
			<Services />
			<Portfolio />
			<Testimonials />
			<ContactUs />
		</>
	);
}

export default App;
