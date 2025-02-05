import React, { useEffect, useState } from "react";
import "../styles/AboutMe.css";
const image3 = "https://burtscriptor.github.io/portfolio-images/dave_ai_1.png";


const techIcons = [
  {
    name: "HTML 5",
    src: "https://burtscriptor.github.io/portfolio-images/html.png",
    alt: "HTML 5 icon"
  },

  {
    name: "CSS 3",
    src: "https://burtscriptor.github.io/portfolio-images/css-3.png",
    alt: "CSS 3 icon"
  },
  {
    name: "Django",
    src: "https://burtscriptor.github.io/portfolio-images/django.png",
    alt: "Django icon"
  },
  {
    name: "Git",
    src: "https://burtscriptor.github.io/portfolio-images/git.png",
    alt: "Git icon"
  },
  {
    name: "JavaScript",
    src: "https://burtscriptor.github.io/portfolio-images/js.png",
    alt: "JavaScript icon"
  },
  {
    name: "MongoDB",
    src: "https://burtscriptor.github.io/portfolio-images/mongoDB.png",
    alt: "MongoDB icon"
  },
  {
    name: "Node.js",
    src: "https://burtscriptor.github.io/portfolio-images/nodejs.png",
    alt: "Node.js icon"
  },
  {
    name: "Python",
    src: "https://burtscriptor.github.io/portfolio-images/python.png",
    alt: "Python icon"
  },
  {
    name: "React.js",
    src: "https://burtscriptor.github.io/portfolio-images/react.png",
    alt: "React.js icon"
  },
  {
    name: "Tailwind",
    src: "https://burtscriptor.github.io/portfolio-images/tailwind.png",
    alt: "Tailwind icon"
  },
  {
    name: "PostgreSQL",
    src: "https://burtscriptor.github.io/portfolio-images/postgresql.png",
    alt: "PostgreSQL icon"
  },
  {
    name: "Three.js",
    src: "https://burtscriptor.github.io/portfolio-images/three.png",
    alt: "Three.js icon"
  },
  {
    name: "Express.Js",
    src: "https://burtscriptor.github.io/portfolio-images/bootstrap.png",
    alt: "Express.js icon"
  },
  {
    name: "Figma",
    src: "https://burtscriptor.github.io/portfolio-images/figma.png",
    alt: "Figma icon"
  }
];


const skills = [
  { name: "Problem Solving", src: "https://burtscriptor.github.io/portfolio-images/solution.png", alt: "Problem Solving icon" },
  { name: "Communication", src: "https://burtscriptor.github.io/portfolio-images/communication.png", alt: "Communication icon" },
  { name: "Collaboration", src: "https://burtscriptor.github.io/portfolio-images/teamwork.png", alt: "Collabortion icon" },
  { name: "Creative Solutions", src: "https://burtscriptor.github.io/portfolio-images/solution%20copy.png", alt: "Creative Solutions icon" }
];


const AboutMe = () => {
  const [icons, setIcons] = useState([]);
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(null);

  const handleIndex = (i) => {
    setIndex(i);
  };

  const generateSkillCards = () => {
    const skillCardsArray = [];
    for (let i = 0; i < skills.length; i++) {
      skillCardsArray.push(
        <div className="skill-card">
          <p>{skills[i].name}</p>
          <img src={skills[i].src} alt={skills[i].alt} />
        </div>
      );
    }
    setCards([skillCardsArray]);
  };

  const generateIcons = () => {
    const iconArray = [];
    for (let i = 0; i < techIcons.length; i++) {
      iconArray.push(
        <div
          className={index == i ? "technology-icon display-over" : "technology-icon"}
          onMouseEnter={() => handleIndex(i)}
          onMouseLeave={() => setIndex(null)}
          key={i}
        >
          <img src={techIcons[i].src} alt={techIcons[i].alt} />
          <p className={index == i ? "icon-text-display-over" : "invisible-text"}>
            {techIcons[i].name}
          </p>
        </div>
      );
    }
    setIcons([iconArray]);
  };

  useEffect(() => {
    generateIcons();
    generateSkillCards();
  }, [index]);

  return (
    <>

      <main className="about-me">

        <div className="home-punchline">
          <h2>About</h2>
        </div>

        <div className="about-me-text-container-two">
          <div className="child-two">
            <img
              src={image3}
              alt="Profile of Dave"
            />
          </div>
          <div className="child-one">
            <h4>FAQ</h4>
            <p>
              1. What was your previous career before software development?
              Worked as a Registered Nurse for seven years, specialising in emergency triage, and multidisciplinary care planning.
            </p>
            <p>
              2. What motivated you to transition into software development?
              A passion for technology and problem-solving. Saw how tech could improve healthcare and wanted to apply those skills in a new, impactful way.
            </p>
            <p>
              3. What training have you completed for software development?
              Completed a Software Engineering Immersive course at General Assembly, gaining experience in full-stack development, React, Node.js, and databases.
            </p>
            <p>
              4. What are your key strengths in tech?
              Known for strong communication skills, teamwork, and quick learning. Background in nursing provides an analytical and detail-oriented approach to problem-solving.
            </p>
            <p>
              5. What kind of roles are you looking for?
              Focused on full-stack development and QA/testing roles, leveraging problem-solving skills and growing as a developer.
            </p>


          </div>


        </div>




        <div className="transferable-skills">
          <div className="skills-header">
            <h2>Transferable skills.</h2>
          </div>

          <div className="skill-cards">{cards}</div>
        </div>

        <div className="transferable-skills">
          <div className="skills-header">
            <h2>Developer skills.</h2>
          </div>

          <div className="skill-cards">
            <div className="skill-card">
              <img
                src="https://burtscriptor.github.io/portfolio-images/web-development.png"
                alt="Icon for web development"
              />
              <p>Web Development</p>
            </div>

            <div className="skill-card">
              <img
                src="https://burtscriptor.github.io/portfolio-images/server-side.png"
                alt="Icon for communication"
              />
              <p>Server Side Construction</p>
            </div>
            <div className="skill-card">
              <img
                src="https://burtscriptor.github.io/portfolio-images/mobile.png"
                alt="Icon for collaboration"
              />
              <p>Mobile App Development</p>
            </div>
            <div className="skill-card">
              <img
                src="https://burtscriptor.github.io/portfolio-images/debugging.png"
                alt="Icon for creative solutions"
              />
              <p>Quality Assurance</p>
            </div>
          </div>
        </div>

        <div className="technology-container">
          <div className="technology-header">
            <h2>Technologies.</h2>
          </div>
          <div className="technology-icons">{icons}</div>
        </div>
      </main>
    </>

  );
};

export default AboutMe;
