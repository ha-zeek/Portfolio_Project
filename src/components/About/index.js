import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.png";
import resume from "./Resume/Resume2023.pdf";

const About = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About Me".split("")}
            idx={15}
          />
        </h1>
        <p>
          Hi, I'm Haziq, a General Assembly software engineer bootcamp graduate.
          Before transitioning to a career in tech, I worked in the project
          management in the pharmaceutical industry, where I honed my skills in
          organization, communication, and leadership. These skills have proven
          invaluable in my work as a developer, where I strive to create web
          applications that solve real-world problems and enhance people's
          lives.
        </p>
        <p>
          During my time at General Assembly, I gained hands-on experience in
          full-stack web development, including building web applications using
          React, Node.js, Express.js, MongoDB, and SQL. I learned how to write
          clean, maintainable code, collaborate effectively with team members
          using Agile methodologies, and deliver projects that meet business
          objectives and user needs. I'm passionate about using technology to
          make a positive impact on society, and I believe that my combination
          of technical and project management skills make me uniquely positioned
          to do so.
        </p>
        <p>
          When I'm not coding, I enjoy sports and gaming, which help me stay
          inspired and creative. I'm excited to continue growing my skills as a
          software engineer and to collaborate with like-minded individuals and
          organizations to create meaningful projects that make a difference in
          the world. Please feel free to contact me to learn more about my work
          or discuss potential collaborations.
        </p>
        <button className="flat-button">
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </button>
      </div>
      <div>
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default About;
