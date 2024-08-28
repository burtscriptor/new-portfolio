import '../styles/Home.css';
import avatar from '../assets/avataaars.svg';
import DownloadCv from '../components/DownloadCv';

const Home = () => {
    return (
        <main className="home">
            <div className="home-container">
           
                <div className="home-punchline">
                    <h2>Fullstack engineer, Sydney </h2>
                    <p>Hey!I'm Dave, nice to meet you!</p>
                    <h3>
                        I design and code user-friendly applications, 
                        and love it!
                    </h3>
                </div>

                <div className="home-image">
                    <img src={avatar} alt="avatar" />
                </div>

               

                <DownloadCv />
            </div>
        </main>
    );
};

export default Home;
