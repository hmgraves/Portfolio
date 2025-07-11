import './Contact.css'

const Contact = () => {
	return (
		<div className="contact-container">
			<h2 className='contact-title'>CONTACT</h2>
			<div className="linkedin contact">
				<a href="https://www.linkedin.com/in/hannah-m-graves/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
					<div className="icon">
						<i className="devicon-linkedin-plain"></i>
						{/* <h4 className='align-ctr'>LinkedIn</h4> */}
					</div>
				</a>
			</div>
			<div className="github contact">
				<a href="https://github.com/hmgraves" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
					<div className="icon">
						<i className="devicon-github-plain"></i>
						{/* <h4 className='align-ctr'>GitHub</h4> */}
					</div>
				</a>
			</div>

			<div className='email contact'>
				Email: hannahmgraves@gmail.com
			</div>
		</div>
	);
};

export default Contact;