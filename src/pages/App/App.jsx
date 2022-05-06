import About from "../../components/About/About";
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
			<Skills />
			<Work />
		</main>
	);
};

export default App;
