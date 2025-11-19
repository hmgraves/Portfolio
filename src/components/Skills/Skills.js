import "./Skills.css";

const Skills = () => {
	return (
		<section className="skills-section" id="skills">
			<div className="skills-inner">
				<h2>Skills &amp; Tools</h2>
				<p className="skills-intro">
					I specialize in modern frontend engineering with full-stack depth and a strong focus on
					usability, performance, and reliable delivery.
				</p>

				<div className="skills-grid">
					<div className="skills-group">
						<h3>Frontend</h3>
						<div className="skills-icons">
							<div className="skill-item">
								<i className="devicon devicon-react-original"></i>
								<span>React</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-angularjs-plain"></i>
								<span>Angular</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-electron-original"></i>
								<span>Electron</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-javascript-plain"></i>
								<span>JavaScript</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-typescript-plain"></i>
								<span>TypeScript</span>
							</div>
							<div className="skill-item">
								<i class="devicon devicon-nextjs-original-wordmark"></i>
								<span>Next.js</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-css3-plain"></i>
								<span>CSS3 / Sass</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-html5-plain"></i>
								<span>HTML5</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-angularmaterial-plain"></i>
								<span>Angular Material</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-materialui-plain"></i>
								<span>MUI</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-ionic-original"></i>
								<span>Ionic</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-storybook-plain"></i>
								<span>Storybook</span>
							</div>
						</div>
					</div>

					<div className="skills-group">
						<h3>Backend &amp; Data</h3>
						<div className="skills-icons">
							<div className="skill-item">
								<i className="devicon devicon-nodejs-plain"></i>
								<span>Node.js</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-express-original"></i>
								<span>Express</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-python-plain"></i>
								<span>Python</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-postgresql-plain"></i>
								<span>PostgreSQL</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-mongodb-plain"></i>
								<span>MongoDB</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-django-plain"></i>
								<span>Django</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-ngrx-plain"></i>
								<span>NgRx</span>
							</div>
						</div>
					</div>

					<div className="skills-group">
						<h3>Cloud &amp; DevOps</h3>
						<div className="skills-icons">
							<div className="skill-item">
								<i className="devicon devicon-amazonwebservices-plain-wordmark"></i>
								<span>AWS</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-circleci-plain"></i>
								<span>CircleCI</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-git-plain"></i>
								<span>Git</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-npm-original-wordmark"></i>
								<span>npm</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-vscode-plain"></i>
								<span>VS Code</span>
							</div>
							<div className="skill-item">
								<i className="devicon devicon-docker-plain"></i>
								<span>Docker</span>
							</div>
						</div>
					</div>

					<div className="skills-group">
						<h3>Also Worked With</h3>
						<div className="skills-tags">
							<span>jQuery</span>
							<span>Web Accessibility</span>
							<span>Design Systems</span>
							<span>UI/UX Collaboration</span>
							<span>SEO</span>
							<span>Google Analytics</span>
						</div>
					</div>
				</div>

				<section className="skills-certs">
					<h3>Certificates</h3>
					<p>WAI0.1x: Introduction to Web Accessibility</p>
				</section>
			</div>
		</section>
	);
};

export default Skills;
