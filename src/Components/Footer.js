import React from 'react';
import "../FooterStyle.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <div className="social-icons">
                <a href="https://www.instagram.com/alejopss/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/alejo-de-la-cruz-374596248/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/AlejoDeLaCruz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </>        
    )
}


export default Footer;