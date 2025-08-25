import Hannah from "../../Images/Hannah.png";
import "./About.css";

const About = () => {
	return (
		<div className="about-container" id="about">
			<h2 className="row-about">ABOUT</h2>
			<img className="about-photo" src={Hannah} alt="author..." tabIndex="-1"/>
			<div className="about-text">
				Senior Frontend & Full-Stack Engineer with 3+ years of experience delivering scalable, production-grade web and desktop applications with a passion for high quality user experience. Proven expertise in React, Angular, TypeScript, and AWS with a strong background in design systems, UI/UX best practices, and data-intensive applications. Extensive experience in leadership, healthcare, and genetic data platforms, leading projects from concept through deployment in startup and lean team environments. Skilled at collaborating with cross-functional teams to build secure, high-performance, and intuitive solutions with a focus in quality.
				<br />
				<br />
				I excel in working in fast-paced startup-like environments developing full scale web and desktop based applications from the ground up. 
				<br />
				<br />
				I successfully completed the Software Engineering Immersive program from General Assembly, as well as a Bachelor of Science in Biology from Oregon State University, and am currently working on a Master of Science in Microbiology &amp; Cell Science
				<br />
				<br />
				I have previous experience in the Healthcare industry working first as a medical assistant and then as a manager leading a team of nurses and medical assistants.
				<br />
				<br />
				Feel free to reach out, I would love to connect!
			</div>
		</div>
	);
};
export default About;
