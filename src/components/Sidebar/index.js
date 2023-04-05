import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoHZ from "../../assets/images/logo-hz.jpg";
import LogoHazeek from "../../assets/images/logo-hazeek.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCode,
  faGear,
  faHome,
  faMessage,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoHZ} className="logoHz" alt="logo" />
        <img className="sub-logo" src={LogoHazeek} alt="hazeek" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="white" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUserNinja} color="white" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="white" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faCode} color="white" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faMessage} color="white" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="white"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="norefferer"
            href="https://www.linkedin.com/in/haziq-luqman-611500172/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="norefferer" href="https://github.com/ha-zeek">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="norefferer"
            href="https://discordapp.com/users/260799150168211459"
          >
            <FontAwesomeIcon icon={faDiscord} color="white" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="white"
        size="2x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
