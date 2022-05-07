import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<div className="container contact">
			<h2>CONTACT</h2>
			<div className="row">
				<div className="column">
					<Link to="https://www.linkedin.com/in/hannah-m-graves/" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="icon">
							<i className="devicon-linkedin-plain"></i>
							<h4 className='align-ctr'>LinkedIn</h4>
						</div>
					</Link>

				</div>
				<div className="column">
					<Link to="https://github.com/hmgraves" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="icon">
							<i className="devicon-github-plain"></i>
							<h4 className='align-ctr'>GitHub</h4>
						</div>
					</Link>
				</div>
				<div className="column">
					<Link to="https://drive.google.com/file/d/1zGxTYTqzhg7_G2_4mqjePCuRIxm1A4no/view?usp=sharing" style={{ textDecoration: 'none', color: 'black' }}>
						<div className="icon">
							<i className="devicon-google-plain"></i>
							<h4 className='align-ctr'>Resume</h4>
						</div>
					</Link>
				</div>
				<div className='column'>
					Email: <Link to="hannahmgraves@hotmail.com" style={{ textDecoration: 'none', color: 'black' }}>hannahmgraves@gmail.com</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;