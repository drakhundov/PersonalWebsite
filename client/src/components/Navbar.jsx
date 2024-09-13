import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-elem">
          <NavLink to="/aboutme" activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li className="navbar-elem">
          <NavLink to="/edu" activeClassName="active">
            Education
          </NavLink>
        </li>
        <li className="navbar-elem">
          <NavLink to="/passions" activeClassName="active">
            Passions
          </NavLink>
        </li>
        <li className="navbar-elem">
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
