import "../styles/Home.css";
import DownloadCv from "../components/DownloadCv";

const image1 = "https://burtscriptor.github.io/portfolio-images/the_real_bean_beanie.png";

const Home = () => {
    return (
        <main className="home">
            <div className="home-container">
                
                <div className="home-punchline-title">
                    <h2>G'day! I'm Dave.</h2>
                    <p>A Software Engineer from Sydney living on Gadigal Land</p>
                </div>

                <div className="home-image">
                    <img src={image1} alt="avatar" />
                </div>

                <div className="home-text">
                    <h2>Hi! Nice to meet you!</h2>
                    <p>
                        I am a logician and creative with a passion for solving complex problems. 
                        Whether it's optimising front-end interfaces to create seamless user experiences, 
                        or structuring scalable APIs, I grow with the challenges of development. 
                        My passion lies in crafting apps and teaming up with people. While others might catch up on 
                        the latest episode of "Nonsense" on Binge, I find my guilty pleasure in honing my coding skills and collorbating on music projects.
                    </p>
                    <DownloadCv />
                </div>

            </div>
        </main>
    );
};

export default Home;
