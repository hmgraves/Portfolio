import Hannah from "../../Images/Hannah.png";
import "./About.css";

const About = () => {
	return (
		<div className="about-container" id="about">
			<h2 className="row-about">ABOUT</h2>
			<img className="about-photo" src={Hannah} alt="author..." tabindex="-1"/>
			<div className="about-text">
				I am a full-stack developer with a passion for creating high-end
				user experiences. I thrive when challenged and fully believe
				that you can never stop learning.
				<br />
				<br />
				I have a certificate in Software Engineering Immersive from
				General Assembly, as well as a Bachelor of Science in Biology
				from Oregon State University.
				<br />
				<br />
				Feel free to reach out, I would love to connect!
			</div>
		</div>
	);
};
export default About;
