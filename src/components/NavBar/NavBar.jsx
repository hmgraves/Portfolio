// import { Link } from "react-router-dom"
import './NavBar.css';
import * as Scroll from 'react-scroll';
const Link = Scroll.Link;

const NavBar = ({ user, setUser }) => {
	return (
		<nav className="navbar">
			<Link to="about" className="link" style={{textDecoration: 'none', color: 'blue'}}>About me</Link>
			&nbsp; | &nbsp;
			<Link to="skills" className="link" style={{textDecoration: 'none', color: 'blue'}}>Skills & Tools</Link>
			&nbsp; | &nbsp;
			<Link to="work" className="link" style={{textDecoration: 'none', color: 'blue'}}>Work</Link>
			&nbsp; | &nbsp;
			<Link to="contact" className="link" style={{textDecoration: 'none', color: 'blue'}}>Contact</Link>
		</nav>
	)
}
export default NavBar