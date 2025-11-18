import "./NavBar.css";
import * as Scroll from "react-scroll";

const Link = Scroll.Link;

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          HG
        </a>
        <div className="nav-links">
          <Link
            to="about"
            className="nav-link"
            smooth
            duration={400}
            offset={-80}
          >
            About
          </Link>
          <Link
            to="skills"
            className="nav-link"
            smooth
            duration={400}
            offset={-80}
          >
            Skills
          </Link>
          <Link
            to="work"
            className="nav-link"
            smooth
            duration={400}
            offset={-80}
          >
            Work
          </Link>
          <Link
            to="contact"
            className="nav-link"
            smooth
            duration={400}
            offset={-80}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
