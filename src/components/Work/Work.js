import './Work.css';
import mines from '../../Images/Minesweeper.png';
import vines from '../../Images/vines.png';
import cars from '../../Images/carcollector.png';
import travel from '../../Images/travel.png';
import { Link } from "react-router-dom";

const Work = () => {
	return (
		<div className="container work">
			<h2>WORK</h2>

			{/* Vines */}
			<div className="row">
				<div className="cols">
					<h3 className='title'>Vines</h3>
					<p>Vines is a full CRUD application built for project two at General Assembly. Vines is a personalized database for you to store, inventory, and manage your houseplants.</p>
					<p>
						Built with:
						<i className="devicon-javascript-plain opposite small-icon"></i>
						<i className="devicon-nodejs-plain small-icon"></i>
						<i className="devicon-mongodb-plain small-icon"></i>
						<i className="devicon-express-original small-icon"></i>
						<i className="devicon-css3-plain small-icon"></i>
						<i className="devicon-html5-plain small-icon"></i>
					</p>
				</div>
				<div className="cols button">
					<img className="vines-img img-right" src={vines} alt="vines..." />
					<div className='btn-block'>
					<br /><br /><br /><br />
						<Link to="https://vines-app.herokuapp.com/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
							View on Heroku
						</Link>
						<br /><br />
						<Link to="https://github.com/hmgraves/Plant-app" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue'}}>
							View on GitHub
						</Link>
						<a href="https://vines-app.herokuapp.com/">View on Heroku</a>
					</div>

				</div>
			</div>

			{/* CarCollector */}
			<div className="row">
				<div className="cols">
					<img className="cars-img img-left" src={cars} alt="cars..." />
					<br /><br /><br /><br />
					<Link to="https://github.com/hmgraves/carcollector" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
						View on GitHub
					</Link>
				</div>
				<div className="cols align-rt">
					<h3 className='title'>CarCollector</h3>
					<p>CarCollector is a full-stack CRUD app using Django and Python. CarCollector is designed for you to keep track of your cars, including maintenance and any additional options you might upgrade your car with.</p>
					<p>
						Built with:
						<i className="devicon-python-plain small-icon"></i>
						<i className="devicon-postgresql-plain small-icon"></i>
						<i className="devicon-django-plain small-icon"></i>
						<i className="devicon-css3-plain small-icon"></i>
						<i className="devicon-html5-plain small-icon"></i>
					</p>
				</div>
			</div>

			{/* Travel */}
			<div className="row">
				<div className="cols">
					<h3 className='title'>Travel</h3>
					<p>This travel app, built as a group project, allows users to choose a destination and view attractions at that destination. Also included is Weatherbug API, so users can see real-time weather at their chosen.</p>
					<p>
						Built with:
						<i className="devicon-python-plain small-icon"></i>
						<i className="devicon-postgresql-plain small-icon"></i>
						<i className="devicon-django-plain small-icon"></i>
						<i className="devicon-css3-plain small-icon"></i>
						<i className="devicon-html5-plain small-icon"></i>
					</p>
				</div>
				<div className="cols">
					<img className="mines-img img-right" src={travel} alt="mines..." />
					<div className='btn-block'>
					<br /><br /><br /><br />
						<Link to="https://sei-travel-app.herokuapp.com/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
							View on Heroku
						</Link>
						<br /><br />
						<Link to="https://github.com/hmgraves/travel-app" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue' }}>
							View on GitHub
						</Link>
					</div>

				</div>
			</div>

			{/* Minesweeper */}
			<div className="row">
				<div className="cols">
					<img className="mines-img img-left" src={mines} alt="mines..." />
					<br /><br /><br /><br />
					<Link to="https://hmgraves.github.io/Minesweeper/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue'}}>
						View on GitHub Pages
					</Link>
					<br /><br />
					<Link to="https://github.com/hmgraves/Minesweeper" style={{ textDecoration: 'none', cursor: 'pointer', color: 'blue',  }}>
						View on GitHub
					</Link>
				</div>
				<div className="cols align-rt">
					<h3 className='title'>Minesweeper</h3>
					<p>This is the classic game, Minesweeper. This was the second game ever built by Hannah. The most difficult part of building this game, was using recursion!</p>
					<p>
						Built with:
						<i className="devicon-javascript-plain opposite small-icon"></i>
						<i className="devicon-css3-plain small-icon"></i>
						<i className="devicon-html5-plain small-icon"></i>
						<i className="devicon-jquery-plain small-icon"></i>
					</p>
				</div>
			</div>

		</div>
	);

};

export default Work;