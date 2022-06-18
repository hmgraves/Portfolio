import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<div className="container contact">
			<h2>CONTACT</h2>
			<div className="row">
				<div className="contact-col">
					<a href="https://www.linkedin.com/in/hannah-m-graves/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="icon">
							<i className="devicon-linkedin-plain"></i>
							<h4 className='align-ctr'>LinkedIn</h4>
						</div>
					</a>

				</div>
				<div className="contact-col">
					<a href="https://github.com/hmgraves" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="icon">
							<i className="devicon-github-plain"></i>
							<h4 className='align-ctr'>GitHub</h4>
						</div>
					</a>
				</div>
				<div className="contact-col">
					<a href="https://drive.google.com/file/d/1S9Z6A4AbM7XhLF5pjGYKAXOPSHq9ZYlX/view?usp=sharing" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="icon">
							<i className="devicon-google-plain"></i>
							<h4 className='align-ctr'>Resume</h4>
						</div>
					</a>
				</div>
				<div className='contact-col email'>
					Email: <a href="hannahmgraves@hotmail.com" style={{ textDecoration: 'none', color: 'black' }}>hannahmgraves@gmail.com</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;