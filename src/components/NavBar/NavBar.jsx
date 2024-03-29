import './NavBar.css';
import * as Scroll from 'react-scroll';
const Link = Scroll.Link;

const NavBar = () => {
	return (
		<nav className="nav-container">
			<Link to="about" className="link" style={{textDecoration: 'none', color: 'blue', cursor: 'pointer'}}>About Me</Link>
			&nbsp; | &nbsp;
			<Link to="skills" className="link" style={{textDecoration: 'none', color: 'blue', cursor: 'pointer'}}>Skills & Tools</Link>
			&nbsp; | &nbsp;
			<Link to="work" className="link" style={{textDecoration: 'none', color: 'blue', cursor: 'pointer'}}>Work</Link>
			&nbsp; | &nbsp;
			<Link to="contact" className="link" style={{textDecoration: 'none', color: 'blue', cursor: 'pointer'}}>Contact</Link>
		</nav>
	);
};
export default NavBar;