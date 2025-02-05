import React, { useState, useRef, useEffect } from "react";
import "../styles/Contact.css";
import Animation from "../components/Animation";
import DownloadCv from "../components/DownloadCv";
import { Link as LinkScroll } from "react-scroll";

const icon1 = "https://burtscriptor.github.io/portfolio-images/mail.png";
const icon2 = "https://burtscriptor.github.io/portfolio-images/linkedin.png";
const icon3 = "https://burtscriptor.github.io/portfolio-images/github.png";

const Contact = () => {
    const [isInView, setIsInView] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (animationRef.current) {
            observer.observe(animationRef.current);
        }

        return () => {
            if (animationRef.current) {
                observer.unobserve(animationRef.current);
            }
        };
    }, []);

    return (
        <main className="contact">
            <div className="contact-header">
                <div className="dog">
                    <h3>Let's chat!</h3>
                </div>

                <div className="do-it">
                    <a
                        href="mailto:david.burt.jnr@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="button">Send me a msg!</button>
                    </a>
                </div>
            </div>



            <div className="contact-text">
                <h3>From small to big, not knowing to knowing</h3>

            </div>

            <div className="contact-body" ref={animationRef}>
                {isInView && <Animation className="contact-animation" loading="lazy" />}
            </div>
            <DownloadCv />
            <div className="link-scroll">
                <LinkScroll to="home" smooth={true} duration={500}> 
                         >> Back to the top
                </LinkScroll>
            </div>
            <div className="contact-icons">
                <a
                    href="https://www.linkedin.com/in/davejayburt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={icon2} alt="LinkedIn icon" />
                </a>
                <a
                    href="mailto:david.burt.jnr@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={icon1} alt="Email icon" />
                </a>
                <a
                    href="https://github.com/burtscriptor"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={icon3} alt="GitHub icon" />
                </a>
            </div>

            <div className="rights">
                <p>Dave Burt 2024 | All Rights Reserved
                    | Website built and deployed from scratch
                    | Particles background adapted from https://github.com/BobbySmurf/particles
                </p>
            </div>
        </main>
    );
};

export default Contact;
