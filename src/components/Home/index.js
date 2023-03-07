import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Gif from "./Gif";
import "./index.scss";

const Home = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Hello!".split("")}
            idx={10}
          />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={"I'm Haziq Luqman".split("")}
            idx={12}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Web Developer.".split("")}
            idx={15}
          />
        </h1>
        <br />
        <h2>Frontend Developer | Project Management</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Gif />
    </div>
  );
};

export default Home;
