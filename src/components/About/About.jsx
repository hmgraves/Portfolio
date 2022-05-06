import Hannah from '../../Images/Hannah.png';
import './About.css';

const About = () => {
	return (
		<div className='container' id="about">
			<div className='row'>
				<div className='col'>
					<br /><br />
					<h2>ABOUT</h2>
					<aside>
						<img className="photo" src={Hannah} alt="author..."/>
					</aside>
				</div>
				
				<div className='align-rt col about-text'>
					I am a full-stack developer with a passion for creating high-end user experiences. I thrive when challenged and am always willing to continue learning. 
					<br /><br />
					I have a certificate in Software Engineering Immersive from General Assembly, as well as a Bachelor of Science in Biology from Oregon State University. 
				</div>
			</div>	
		</div>
	);
};
export default About;