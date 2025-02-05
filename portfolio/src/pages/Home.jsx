import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import image1 from "../assets/dave_ai_1.png"
import ParticlesComponent from "../components/Particles";
import { Link as LinkScroll } from 'react-scroll';

const Home = () => {

    return (
        <main className="home">
            <ParticlesComponent id="particles" />
            <div className="home-container">



                <div className="home-image">
                    <img src={image1} alt="avatar" />
                </div>
                <h1>G'day! I'm Dave.</h1>
                <h2>Software Developer from Sydney</h2>
                <LinkScroll to="projects" smooth={true} duration={500}>
                    <h3>
                       >> Small to big, not knowing to knowing
                    </h3>
                </LinkScroll>
            </div>

        </main>
    );
};

export default Home;


