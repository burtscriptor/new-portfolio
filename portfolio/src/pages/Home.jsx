import "../styles/Home.css";
import DownloadCv from "../components/DownloadCv";

const image1 = "https://burtscriptor.github.io/portfolio-images/the_real_bean_beanie.png";

const Home = () => {
    return (
        <main className="home">
            <div className="home-container">
                
                <div className="home-punchline-title">
                    <h2>G'day! I'm Dave.</h2>
                    <p>I'm a creative Software Engineer from Sydney</p>
                </div>

                <div className="home-image">
                    <img src={image1} alt="avatar" />
                </div>

                <div className="home-text">
                    <p>
                        I love logic, creativity and solving complex problems. 
                        Whether it's optimising front-end interfaces to create seamless user experiences, 
                        or structuring scalable APIs, I grow with the challenges of development. 
                        I thrive on crafting apps and collaborating with people. While others might catch up on 
                        the latest episode of "Nonsense" on Binge, I find my guilty pleasure in honing my coding skills and collorbating on music projects.
                    </p>
                    <DownloadCv />
                </div>

            </div>
        </main>
    );
};

export default Home;
