import React from "react";
import img from "../../images/mamun3.jpg";
import "./About.css";

const About = () => {
    return (
        <div id="about" className="about-section">
            <h2 className="my-5">About Me</h2>
            <img className="avartar" src={img} alt="" />
            <div className="about-para">
                <p>
                    Hi! I am Mazharul Islam Mamun! I am a passionate and
                    pragmatic software engineer 1 years of professional
                    experience and I've taught over 0.1 million people how to
                    code or how to become professional software engineers
                    through my YouTube channel and online courses.
                </p>
                <p>
                    My mission is to make coding and software engineering
                    accessible to everyone through courses that are simple to
                    digest, and practical to implement.
                </p>
            </div>
        </div>
    );
};

export default About;
