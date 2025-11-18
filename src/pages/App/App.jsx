import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";

import "./App.css";

const App = () => {
  return (
    <main className="app">
      <header className="app-header">
        <NavBar />
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="hero-kicker">Senior Frontend & Full-Stack Engineer</p>
            <h1>Hello! I’m Hannah.</h1>
            <p className="hero-subtitle">
              I design and build modern web & desktop applications for healthcare, genetics,
              and data-intensive workflows using React, Angular, TypeScript, Python, and AWS.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn primary">Let’s work together</a>
              <a
                href="mailto:hannahmgraves@gmail.com"
                className="btn secondary"
              >
                Email me
              </a>
            </div>
          </div>
        </section>
      </header>

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
