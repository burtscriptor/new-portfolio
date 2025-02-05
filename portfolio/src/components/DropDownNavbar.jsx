import React from "react";
import { Link as LinkScroll } from "react-scroll"; 
import "../styles/HamburgerMenu.css";

const DropDownNavBar = ({ isOpen, handleToggle }) => {
    return (
        <div className={ isOpen ? "nav_bar n_visible" : "n_invisible"} onMouseLeave={handleToggle} >
           

                <LinkScroll to="home_page" smooth={true} duration={500}>
                     Greetings!
                </LinkScroll>
          
           
                <LinkScroll to="about_me" smooth={true} duration={500}> 
                About
                </LinkScroll>
          
           
                <LinkScroll to="projects" smooth={true} duration={500}>
                     Projects
                </LinkScroll>
          
           
                <LinkScroll to="contact" smooth={true} duration={500}>
                     Contact
                </LinkScroll>
        
        </div>
    );
};

export default DropDownNavBar;
