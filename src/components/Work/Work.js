import './Work.css';
import mines from '../../Images/Minesweeper.png';
import vines from '../../Images/vines.png';
import cars from '../../Images/carcollector.png';
import travel from '../../Images/travel.png';
import tackpage from '../../Images/TackPage.png';
import scisco from '../../Images/scisco.png';

const Work = () => {
	return (
		<div className="container work">
			<h2>EXPERIENCE</h2>

			{/* Scisco Genetics */}
			<div>
				<h3 className='title-1 title'>Scisco Genetics</h3>
				<h4>Senior Frontend Software Engineer</h4>
				<h5>08/2022 - PRESENT</h5>
				<p className='about'>At Scisco Genetics, Hannah leads frontend development as the sole frontend engineer across multiple platforms, including web and desktop. She spearheaded the development of the company’s marketing website using React and Material UI. Her work also includes building a cross-platform Electron-based desktop application from the ground up using Angular and TypeScript, enabling secure and performant genetic data analysis both locally and in the cloud. In addition, she maintains the company’s main cloud-based platform used by clinical labs and hospitals worldwide. Across these projects, Hannah has integrated key AWS services—including Lambda, S3, Cognito, and API Gateway—to deliver scalable, secure, and reliable full-stack solutions.</p>

				Some key contributions include:
				<ul>
					<li>
						Developing a cross-platform Electron desktop application to support HLA and Chimerism software, with modes for standalone, LAN-hosted, and cloud-connected operation
					</li>
					<li>
						Building cloud-based genetic data services in Angular and Ionic, later transitioning to Material for improved UX consistency
					</li>
					<li>
						Building and designing visualizations for gene sequencing analysis use in both lab and client environments
					</li>
					<li>
						Implementing an end-to-end lab service platform for sample logging, tracking, and MiSeq-based data analysis, ensuring accurate and timely report generation
					</li>
					<li>
						Creating efficient report zipping and download workflows using AWS Lambda and S3 to support large-scale genomic data delivery
					</li>
					<li>
						Planning and development of a user portal to place orders, receive results, and receive and pay for invoices
					</li>
				</ul>

				<p className='built-1'>
					Stack used:
					<br /><br />
					<i className="devicon-angularjs-plain small-icon"></i>
					<i className="devicon-react-original small-icon"></i>
					<i className="devicon-electron-original small-icon"></i>
					<i className="devicon-typescript-plain opposite small-icon"></i>
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
					<i className="devicon-python-plain small-icon"></i>
					<i className="devicon-postgresql-plain small-icon"></i>
					<i class="devicon-amazonwebservices-plain-wordmark small-icon"></i>

				</p>

			</div>
			<hr />

			<h2>PAST PROJECTS</h2>
			{/* Scisco Genetics */}
			<div className='work-container-2'>
				<h3 className='title-2 title'>Scisco Genetics Website</h3>
				<p className='about-2'>A React and Material UI company marking website.</p>
				<p className='built-2'>
					Built with:
					<br /><br />
					<i className="devicon-react-original small-icon"></i>
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
					<i class="devicon-materialui-plain small-icon"></i>
				</p>
				<img className="work-img img-2" src={scisco} alt="scisco..." />
				<div className='btn-block links-2'>
					<a href="https://sciscogenetics.com/" className='btn link-1' target="_blank" rel="noreferrer">
						Website
					</a>
				</div>
			</div>
			<hr />

			{/* TackTrunk */}
			<div className='work-container-1'>
				<h3 className='title-1 title'>TackTrunk</h3>
				<p className='about-1'>Made in 2022, TackTrunk is a full CRUD React application built with the busy horse barn in mind. Tack Trunk allows users to log in and add/categorize their personal tack. Users are also able to schedule lessons with any of the barn's trainers.</p>
				<p className='built-1'>
					Built with:
					<br /><br />
					<i className="devicon-react-original small-icon"></i>
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-nodejs-plain small-icon"></i>
					<i className="devicon-mongodb-plain small-icon"></i>
					<i className="devicon-express-original small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-1" src={tackpage} alt="tackpage..." />
				<div className='btn-block links-1'>
					<a href="https://tacktrunk.herokuapp.com/" className='btn link-1' target="_blank" rel="noreferrer">
						Heroku
					</a>
					<a href="https://github.com/hmgraves/TackTrunk" className='btn link-2' target="_blank" rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
			<hr />


			{/* Vines */}
			<div className='work-container-2'>
				<h3 className='title title-2'>Vines</h3>
				<p className='about-2'>Made in 2022, Vines is a full CRUD application built for project two at General Assembly. Vines is a personalized database for you to store, inventory, and manage your houseplants.</p>
				<p className='built-2'>
					Built with:
					<br /><br />
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-nodejs-plain small-icon"></i>
					<i className="devicon-mongodb-plain small-icon"></i>
					<i className="devicon-express-original small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-2" src={vines} alt="vines..." />
				<div className='btn-block links-2'>
					<a href="https://vines-app.herokuapp.com/" className='btn' target="_blank" rel="noreferrer">
						Heroku
					</a>
					<a href="https://github.com/hmgraves/Plant-app" className='btn link-2' target="_blank" rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
			<hr />

			{/* Car Collector */}
			<div className='work-container-1'>
				<h3 className='title-1 title'>CarCollector</h3>
				<p className='about-1'>Made in 2022, CarCollector is a full-stack CRUD app using Django and Python. CarCollector is designed for you to keep track of your cars, including maintenance and any additional options you might upgrade your car with.</p>
				<p className='built-1'>
					Built with:
					<br /><br />
					<i className="devicon-python-plain small-icon"></i>
					<i className="devicon-postgresql-plain small-icon"></i>
					<i className="devicon-django-plain small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-1" src={cars} alt="cars..." />
				<div className='btn-block links-1'>

					<a href="https://github.com/hmgraves/carcollector" className='btn' target="_blank" rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
			<hr />

			{/* Travel */}
			<div className='work-container-2'>
				<h3 className='title title-2'>Travel</h3>
				<p className='about-2'>Made in 2022, This travel app, built as a group project, allows users to choose a destination and view attractions at that destination. Also included is Weatherbug API, so users can see real-time weather at their chosen location.</p>
				<p className='built-2'>
					Built with:
					<br /><br />
					<i className="devicon-python-plain small-icon"></i>
					<i className="devicon-postgresql-plain small-icon"></i>
					<i className="devicon-django-plain small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-2" src={travel} alt="mines..." />
				<div className='btn-block links-2'>
					<a href="https://sei-travel-app.herokuapp.com/" className='btn link-1' target="_blank" rel="noreferrer">
						Heroku
					</a>
					<a href="https://github.com/hmgraves/travel-app" className='btn link-2' target="_blank" rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
			<hr />

			{/* Minesweeper */}
			<div className='work-container-1'>
				<h3 className='title-1 title'>Minesweeper</h3>
				<p className='about-1'>This is the classic game, Minesweeper. This was the second game ever built by Hannah. The most difficult part of building this game, was using recursion!</p>
				<p className='built-1'>
					Built with:
					<br /><br />
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
					<i className="devicon-jquery-plain small-icon"></i>
				</p>
				<img className="work-img img-1" src={mines} alt="mines..." />
				<div className='btn-block links-1'>
					<a href="https://hmgraves.github.io/Minesweeper/"  className='btn' target="_blank" rel="noreferrer">
						GH Pages
					</a>
					<a href="https://github.com/hmgraves/Minesweeper" className='btn link-2' target="_blank" rel="noreferrer">
						GitHub 
					</a>
				</div>
			</div>

		</div>
	);

};

export default Work;