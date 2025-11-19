import "./Work.css";
import mines from "../../Images/Minesweeper.png";
import vines from "../../Images/vines.png";
import cars from "../../Images/carcollector.png";
import travel from "../../Images/travel.png";
import tackpage from "../../Images/TackPage.png";
import scisco from "../../Images/scisco.png";
import ImageSlider from "../ImageSlider/ImageSlider";
import gems1 from "../../Images/gems/gems1.png";
import gems2 from "../../Images/gems/gems2.png";
import gems3 from "../../Images/gems/gems3.png";
import gems4 from "../../Images/gems/gems4.png";
import gems5 from "../../Images/gems/gems5.png";

const imageUrls = [gems1, gems2, gems3, gems4, gems5];

const Work = () => {
	return (
		<div>
			<section className="work-section" id="work">
				<div className="work-inner">
					<h2>Experience</h2>

					<article className="experience-card">
						<header className="experience-header">
							<div>
								<h3>Senior Fullstack Software Engineer</h3>
								<p className="experience-company">Scisco Genetics · Seattle, WA</p>
							</div>
							<p className="experience-dates">Aug 2022 – September 2025</p>
						</header>

						<p className="experience-summary">
							Sole frontend engineer leading development of web and desktop applications that power
							genetic testing workflows used by clinical labs and hospitals. I own projects end-to-end,
							from architecture and UI design to implementation, deployment, and iteration.
						</p>

						<ul className="experience-list">
							<li>
								Built and maintain an <strong>Electron + Angular + Node.js</strong> desktop app that enables
								secure, offline HLA and Chimerism analyses, real-time status updates, dark/light
								theming, and reusable UI components.
							</li>
							<li>
								Architected a <strong>cloud-based ordering and billing platform</strong> where
								healthcare clients submit orders, access reports, manage quotes, and process payments.
							</li>
							<li>
								Created visualizations and workflows for high-throughput gene sequencing analysis,
								supporting both lab users and external clients.
							</li>
							<li>
								Implemented end-to-end sample logging, tracking, and MiSeq integration, reducing report
								turnaround time and improving data reliability.
							</li>
							<li>
								Integrated AWS services (<strong>Lambda, S3, Cognito, API Gateway, Parameter Store</strong>)
								into frontend workflows to deliver secure, scalable full-stack solutions.
							</li>
						</ul>

						<div className="experience-stack">
							<span>Angular</span>
							<span>React</span>
							<span>Node.js</span>
							<span>Electron</span>
							<span>TypeScript</span>
							<span>Python</span>
							<span>NgRx</span>
							<span>Material UI</span>
							<span>Angular Material</span>
							<span>AWS</span>
							<span>PostgreSQL</span>
							<span>Storybook</span>
							<span>CircleCI</span>
							<span>Docker</span>
						</div>
					</article>

					<h2 className="work-subheading">Selected Projects</h2>

					<div className="projects-grid">
						{/* GeMS – keep carousel free */}
						<article className="project-card">
							<div className="project-media project-media-slider">
								<ImageSlider images={imageUrls} />
							</div>
							<div className="project-content">
								<h3 className="project-title">Scisco Genetics GeMS</h3>
								<p className="project-type">Desktop Application · Genetics</p>
								<p className="project-description">
									Electron-based desktop application architected and developed to power HLA and
									Chimerism analyses, with gene sequencing visualizations, authentication, navigation
									history, real-time status updates, and reusable components.
								</p>
								<div className="project-stack">
									<span>Electron</span>
									<span>Angular</span>
									<span>TypeScript</span>
									<span>Node.js</span>
									<span>Angular Material</span>
									<span>NgRx</span>
								</div>
							</div>
						</article>

						{/* Scisco Website – static image */}
						<article className="project-card">
							<div className="project-media project-media-static">
								<img src={scisco} alt="Scisco Genetics marketing site" />
							</div>
							<div className="project-content">
								<h3 className="project-title">Scisco Genetics Website</h3>
								<p className="project-type">Marketing Site · React</p>
								<p className="project-description">
									Responsive React + Material UI marketing site redesign that improved performance,
									SEO, and clarity of the company’s offerings for labs, hospitals, and partners.
								</p>
								<div className="project-stack">
									<span>React</span>
									<span>JavaScript</span>
									<span>Material UI</span>
									<span>Node.js</span>
									<span>CSS</span>
									<span>HTML</span>
								</div>
								<div className="project-links">
									<a
										href="https: sciscogenetics.com/"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										View Website
									</a>
								</div>
							</div>
						</article>

					</div>

				</div>
			</section>
			<div className="work-school-gradient"></div>
			<section className="school">
				<div className="work-inner">
					<h3 className="work-subheading small">School Projects</h3>
					<div className="projects-grid projects-grid-small">
						{/* TackTrunk */}
						<article className="project-card project-card-small">
							<div className="project-media">
								<img src={tackpage} alt="TackTrunk app screenshot" />
							</div>
							<div className="project-content">
								<h4 className="project-title">TackTrunk</h4>
								<p className="project-type">Full-Stack Web App · 2022</p>
								<p className="project-description">
									Full CRUD React application for busy horse barns, allowing users to log and
									categorize tack and schedule lessons with trainers.
								</p>
								<div className="project-stack">
									<span>React</span>
									<span>Node.js</span>
									<span>Express</span>
									<span>MongoDB</span>
									<span>JavaScript</span>
									<span>CSS</span>
									<span>HTML</span>
								</div>
								<div className="project-links">
									{/* <a
		  							href="https: tacktrunk.herokuapp.com/"
		  							className="btn project-link"
		  							target="_blank"
		  							rel="noreferrer"
		  						>
		  							Live
		  						</a> */}
									<a
										href="https: github.com/hmgraves/TackTrunk"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</div>
							</div>
						</article>

						{/* Vines */}
						<article className="project-card project-card-small">
							<div className="project-media">
								<img src={vines} alt="Vines app" />
							</div>
							<div className="project-content">
								<h4 className="project-title">Vines</h4>
								<p className="project-type">Plant Inventory · CRUD App</p>
								<p className="project-description">
									Personalized plant inventory app for tracking and managing a houseplant collection.
								</p>
								<div className="project-stack">
									<span>JavaScript</span>
									<span>Node.js</span>
									<span>Express</span>
									<span>MongoDB</span>
									<span>CSS</span>
									<span>HTML</span>
								</div>
								<div className="project-links">
									{/* <a
		  							href="https: vines-app.herokuapp.com/"
		  							className="btn project-link"
		  							target="_blank"
		  							rel="noreferrer"
		  						>
		  							Live
		  						</a> */}
									<a
										href="https: github.com/hmgraves/Plant-app"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</div>
							</div>
						</article>

						{/* CarCollector */}
						<article className="project-card project-card-small">
							<div className="project-media">
								<img src={cars} alt="CarCollector app" />
							</div>
							<div className="project-content">
								<h4 className="project-title">CarCollector</h4>
								<p className="project-type">Vehicle Tracking · CRUD App</p>
								<p className="project-description">
									Full-stack app to track cars, maintenance, and upgrades for a personal collection.
								</p>
								<div className="project-stack">
									<span>Python</span>
									<span>Django</span>
									<span>PostgreSQL</span>
									<span>CSS</span>
									<span>HTML</span>
								</div>
								<div className="project-links">
									<a
										href="https: github.com/hmgraves/carcollector"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</div>
							</div>
						</article>

						{/* Travel App */}
						<article className="project-card project-card-small">
							<div className="project-media">
								<img src={travel} alt="Travel app" />
							</div>
							<div className="project-content">
								<h4 className="project-title">Travel App</h4>
								<p className="project-type">Group Project · Travel + Weather</p>
								<p className="project-description">
									Travel planning app that surfaces attractions and real-time weather for selected
									destinations.
								</p>
								<div className="project-stack">
									<span>Python</span>
									<span>Django</span>
									<span>PostgreSQL</span>
									<span>Weather API</span>
									<span>CSS</span>
									<span>HTML</span>
								</div>
								<div className="project-links">
									{/* <a
		  							href="https: sei-travel-app.herokuapp.com/"
		  							className="btn project-link"
		  							target="_blank"
		  							rel="noreferrer"
		  						>
		  							Live
		  						</a> */}
									<a
										href="https: github.com/hmgraves/travel-app"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</div>
							</div>
						</article>

						{/* Minesweeper */}
						<article className="project-card project-card-small">
							<div className="project-media">
								<img src={mines} alt="Minesweeper game" />
							</div>
							<div className="project-content">
								<h4 className="project-title">Minesweeper</h4>
								<p className="project-type">Game · Recursion Practice</p>
								<p className="project-description">
									Browser-based implementation of the classic Minesweeper game, built to practice
									recursion and game state management.
								</p>
								<div className="project-stack">
									<span>JavaScript</span>
									<span>jQuery</span>
									<span>CSS</span>
									<span>HTML</span>
								</div>
								<div className="project-links">
									<a
										href="https: hmgraves.github.io/Minesweeper/"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										Live
									</a>
									<a
										href="https: github.com/hmgraves/Minesweeper"
										className="btn project-link"
										target="_blank"
										rel="noreferrer"
									>
										GitHub
									</a>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Work;
