import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";

import "./App.css";

const App = () => {
	return (
		<main className="App">
			<header>
				<NavBar />
			</header>
			<br />
			<br />
			<br />
			<h1 className="align-ctr">Hello! I'm Hannah!</h1>
			<About />
			<div className="about-skills" />
			<Skills />
			<div className="skills-work" />
			<Work />
			<div className="work-contact" />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
