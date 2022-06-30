import './Skills.css';
import React from 'react';

const Skills = () => {
	return (
		<div className="container skills">
			<h2 className='skills-title'>SKILLS & TOOLS</h2>
				<div className="icon icon-1">
					<i className="devicon devicon-react-original"></i>
					<h4 className='icon-name'>React</h4>
				</div>
				<div className="icon icon-2">
					<i className="devicon devicon-javascript-plain opposite"></i>
					<h4 className='align-ctr'>JavaScript</h4>
				</div>
				<div className="icon icon-3">
					<i className="devicon devicon-python-plain"></i>
					<h4 className='align-ctr'>Python</h4>
				</div>
				<div className="icon icon-4">
					<i className="devicon devicon-jquery-plain"></i>
					<h4 className='align-ctr'>jQuery</h4>
				</div>
				<div className="icon icon-5">
					<i className="devicon devicon-express-original"></i>
					<h4 className='align-ctr'>Express</h4>
				</div>
				<div className="icon icon-6">
					<i className="devicon devicon-nodejs-plain"></i>
					<h4 className='align-ctr'>node.js</h4>
				</div>
				<div className="icon icon-7">
					<i className="devicon devicon-mongodb-plain"></i>
					<h4 className='align-ctr'>mongoDB</h4>
				</div>
				<div className="icon icon-8">
					<i className="devicon devicon-postgresql-plain"></i>
					<h4 className='align-ctr'>PostgreSQL</h4>
				</div>
				<div className="icon icon-9">
					<i className="devicon devicon-django-plain"></i>
					<h4 className='align-ctr'>Django</h4>
				</div>
				<div className="icon icon-10">
					<i className="devicon devicon-css3-plain"></i>
					<h4 className='align-ctr'>CSS3</h4>
				</div>
				<div className="icon icon-11">
					<i className="devicon devicon-html5-plain"></i>
					<h4 className='align-ctr'>HTML5</h4>
				</div>
				<div className="icon icon-12">
					<i className="devicon devicon-git-plain"></i>
					<h4 className='align-ctr'>git</h4>
				</div>
				<div className="icon icon-13">
					<i className="devicon devicon-amazonwebservices-original"></i>
					<h4 className='align-ctr'>AWS</h4>
				</div>
				<div className="icon icon-14">
					<i className="devicon devicon-heroku-original"></i>
					<h4 className='align-ctr'>Heroku</h4>
				</div>
				<div className="icon icon-15">
					<i className="devicon devicon-vscode-plain"></i>
					<h4 className='align-ctr'>vscode</h4>
				</div>
		</div>

	);
};

export default Skills;