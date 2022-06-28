import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<div className="contact-container">
			<h2>CONTACT</h2>
			<div className="linkedin contact">
				<a href="https://www.linkedin.com/in/hannah-m-graves/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
					<div className="icon">
						<i className="devicon-linkedin-plain"></i>
						<h4 className='align-ctr'>LinkedIn</h4>
					</div>
				</a>
			</div>
			<div className="github contact">
				<a href="https://github.com/hmgraves" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
					<div className="icon">
						<i className="devicon-github-plain"></i>
						<h4 className='align-ctr'>GitHub</h4>
					</div>
				</a>
			</div>
			<div className="resume contact">
				<a href="https://docs.google.com/document/d/1k6g-QCqOppBUKcOp3VwDt9CW9DngHGDRwlZR3pIEckU/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
					<div className="icon">
						<i className="devicon-google-plain"></i>
						<h4 className='align-ctr'>Resume</h4>
					</div>
				</a>
			</div>
			<div className='email contact'>
				Email: <a href="hannahmgraves@hotmail.com" style={{ textDecoration: 'none', color: 'black' }}>&nbsp; hannahmgraves@gmail.com</a>
			</div>
		</div>
	);
};

export default Contact;