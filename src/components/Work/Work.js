import './Work.css';
import mines from '../../Images/Minesweeper.png';
import vines from '../../Images/vines.png';
import cars from '../../Images/carcollector.png';
import travel from '../../Images/travel.png';
import tackpage from '../../Images/TackPage.png';

const Work = () => {
	return (
		<div className="container work">
			<h2>WORK</h2>

			{/* TackTrunk */}
			<div className='work-container-1'>
				<h3 className='title-1 title'>TackTrunk</h3>
				<p className='about-1'>TackTrunk is a full CRUD React application built with the busy horse barn in mind. Tack Trunk allows users to log in and add/categorize their personal tack. Users are also able to schedule lessons with any of the barn's trainers.</p>
				<p className='built-1'>
					Built with:
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
					<a href="https://tacktrunk.herokuapp.com/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on Heroku
					</a>
					<a href="https://github.com/hmgraves/TackTrunk" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on GitHub
					</a>
				</div>
			</div>
			<hr />


			{/* Vines */}
			<div className='work-container-2'>
				<h3 className='title title-2'>Vines</h3>
				<p className='about-2'>Vines is a full CRUD application built for project two at General Assembly. Vines is a personalized database for you to store, inventory, and manage your houseplants.</p>
				<p className='built-2'>
					Built with:
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-nodejs-plain small-icon"></i>
					<i className="devicon-mongodb-plain small-icon"></i>
					<i className="devicon-express-original small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-2" src={vines} alt="vines..." />
				<div className='btn-block links-2'>
					<a href="https://vines-app.herokuapp.com/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on Heroku
					</a>
					<a href="https://github.com/hmgraves/Plant-app" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on GitHub
					</a>
				</div>
			</div>
			<hr />

			{/* Car Collector */}
			<div className='work-container-1'>
				<h3 className='title-1 title'>CarCollector</h3>
				<p className='about-1'>CarCollector is a full-stack CRUD app using Django and Python. CarCollector is designed for you to keep track of your cars, including maintenance and any additional options you might upgrade your car with.</p>
				<p className='built-1'>
					Built with:
					<i className="devicon-python-plain small-icon"></i>
					<i className="devicon-postgresql-plain small-icon"></i>
					<i className="devicon-django-plain small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-1" src={cars} alt="cars..." />
				<div className='btn-block links-1'>

					<a href="https://github.com/hmgraves/carcollector" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on GitHub
					</a>
				</div>
			</div>
			<hr />

			{/* Travel */}
			<div className='work-container-2'>
				<h3 className='title title-2'>Travel</h3>
				<p className='about-2'>This travel app, built as a group project, allows users to choose a destination and view attractions at that destination. Also included is Weatherbug API, so users can see real-time weather at their chosen location.</p>
				<p className='built-2'>
					Built with:
					<i className="devicon-python-plain small-icon"></i>
					<i className="devicon-postgresql-plain small-icon"></i>
					<i className="devicon-django-plain small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
				</p>
				<img className="work-img img-2" src={travel} alt="mines..." />
				<div className='btn-block links-2'>
					<a href="https://sei-travel-app.herokuapp.com/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on Heroku
					</a>
					<a href="https://github.com/hmgraves/travel-app" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on GitHub
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
					<i className="devicon-javascript-plain opposite small-icon"></i>
					<i className="devicon-css3-plain small-icon"></i>
					<i className="devicon-html5-plain small-icon"></i>
					<i className="devicon-jquery-plain small-icon"></i>
				</p>
				<img className="work-img img-1" src={mines} alt="mines..." />
				<div className='btn-block links-1'>
					<a href="https://hmgraves.github.io/Minesweeper/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on GitHub Pages
					</a>
					<a href="https://github.com/hmgraves/Minesweeper" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue', }}>
						View on GitHub
					</a>
				</div>
			</div>

		</div>
	);

};

export default Work;