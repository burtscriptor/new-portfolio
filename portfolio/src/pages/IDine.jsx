import React, {useState} from 'react';
const icon1 = 'https://burtscriptor.github.io/portfolio-images/github.png';
const icon2 = 'https://burtscriptor.github.io/portfolio-images/play-button.png';
const image1 = 'https://burtscriptor.github.io/portfolio-images/inclusiveDine.png';

const Dine = () => {
    const [addClassName, setAddClassName] = useState(false);

    return (
        <>
            <main className="spaceOne">
                <div className="spaceOneContent">
                    <div className={ !addClassName ? "spaceOneImageItem" : "spaceOneImageItem getDosed"} onMouseEnter={()=> setAddClassName(true)} 
                    onMouseLeave={()=> setAddClassName(false)}>
                        <img src={image1} alt="main screen" />
                    </div>

                    <div className="spaceOneTextItem">
                        <div className="proHeader">
                            <h3>InclusiveDine</h3>
                            <a href="https://github.com/burtscriptor/wheelify" target="_blank" rel="noopener noreferrer">
                                <img src={icon1} alt="Github icon" />
                            </a>
                            <a href="https://inclusive-dine-30e4e63a5918.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={icon2} alt="Go to demo" />
                            </a>
                        </div>
                        
                        <div className="spaceText">
                            <p>
                                A restaurant review app designed to improve awareness of wheelchair
                                accessibility by providing a platform for users to share 
                                and discover accessibility information for dining venues. 
                                The app features a robust CRUD system and follows MVC architecture,
                                utilizing Google OAuth for secure authentication and
                                the Mongoose ODM library for efficient data management.
                            </p>
                        </div>

                        <div className="space-tabs">
                            <p className="darkblue">GoogleOAuth</p>
                            <p className="blue">Node.js</p>
                            <p className="lblue">Express.js</p>
                            <p className="white">MongoDB</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dine;
