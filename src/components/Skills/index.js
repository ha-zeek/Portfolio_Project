import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Skills".split("")}
            idx={10}
          />
        </h1>
        <p>
          I'm proficient in Vanilla JS, React, CSS, HTML, MongoDB, SQL, and
          Node.js. I've developed full-stack web applications using these
          technologies, with a focus on creating clean, maintainable code that
          delivers business value and meets user needs.
        </p>
        <p>
          I'm always looking for ways to improve my skills and stay up-to-date
          with the latest trends and best practices in software development.
        </p>
        <br />
        <br />
        <br />
        <br />
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Experience".split("")}
            idx={10}
          />
        </h1>
        <p>
          Prior to pursuing a career in tech, I worked in project management in
          the pharmaceutical industry. During my time in this role, I developed
          strong skills in project planning, execution, and stakeholder
          management.
        </p>
        <p>
          I'm excited to bring my experience in project management to the tech
          industry and help teams deliver high-quality products that meet the
          needs of users and stakeholders.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNodeJs} color="#5FA04E" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
