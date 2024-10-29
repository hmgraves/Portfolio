import Hannah from "../../Images/Hannah.png";
import "./About.css";

const About = () => {
	return (
		<div className="about-container" id="about">
			<h2 className="row-about">ABOUT</h2>
			<img className="about-photo" src={Hannah} alt="author..." tabindex="-1"/>
			<div className="about-text">
				I am a Software Engineer at Scisco Genetics with a passion for creating high-end user experiences. I have a strong foundation in front end development with popular technologies such as TypeScript, Angular, React, HTML, SCSS, and Electron, as well as experience with popular CSS frameworks like Material-UI, Material, and Ionic. 
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
