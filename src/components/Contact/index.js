import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qty4ryo",
        "template_1m4beqj",
        refForm.current,
        "jLpxQWQFPJu63zuZb"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact Me".split("")}
              idx={15}
            />
          </h1>
          <p>
            If you have any questions, comments, or just want to say hello,
            please don't hesitate to reach out. You can use the form below to
            send me a message, and I'll do my best to respond. Whether you're
            interested in discussing potential collaborations, learning more
            about my work, or just want to connect, I look forward to hearing
            from you. Let's make something great together!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Haziq Luqman (Hazeek)
          <br />
          <br />
          Kuala Lumpur, Malaysia
          <br />
          <span>haziq8898@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[3.140853, 101.693207]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[3.140853, 101.693207]}>
              <Popup>I am here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
