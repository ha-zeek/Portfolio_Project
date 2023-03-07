import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoHZ from "../../assets/images/logo-hz.jpg";
import LogoHazeek from "../../assets/images/logo-hazeek.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faGear,
  faHome,
  faMessage,
  faUser,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoHZ} alt="logo" />
        <img className="sub-logo" src={LogoHazeek} alt="hazeek" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="white" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUserNinja} color="white" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="white" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faCode} color="white" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faMessage} color="white" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="norefferer"
            href="https://www.linkedin.com/in/haziq-luqman-611500172/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="norefferer" href="https://github.com/ha-zeek">
            <FontAwesomeIcon icon={faGithubSquare} color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
