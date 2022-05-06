import { Link } from "react-router-dom"
import './NavBar.css';

const NavBar = ({ user, setUser }) => {
	return (
		<nav className="navbar">
			<Link to="/orders" className="link" style={{textDecoration: 'none', color: 'blue'}}>About me</Link>
			&nbsp; | &nbsp;
			<Link to="/orders/new" className="link" style={{textDecoration: 'none', color: 'blue'}}>Skills & Tools</Link>
			&nbsp; | &nbsp;
			<Link to="" className="link" style={{textDecoration: 'none', color: 'blue'}}>Work</Link>
			&nbsp; | &nbsp;
			<Link to="" className="link" style={{textDecoration: 'none', color: 'blue'}}>Contact</Link>
		</nav>
	)
}
export default NavBar