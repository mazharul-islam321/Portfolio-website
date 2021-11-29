import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import HomePage from "../HomePage/HomePage";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            <Projects></Projects>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;
