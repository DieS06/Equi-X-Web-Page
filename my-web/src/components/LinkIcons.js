import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { useState, useRef, useEffect } from 'react';
import git from "../assets/images/SVG/Github.svg";
import beh from "../assets/images/SVG/Behance.svg";
import insta from "../assets/images/SVG/Instagram.svg";
import linkedin from "../assets/images/SVG/Linkedin.svg";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/wsIcon.css"

const LinkIcons = () => {
    const url = 'https://wa.me/+50686750723';
    const handleClick = () => {
        window.location.href = url;
    }
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTopRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 100); // Adjust threshold as needed
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
    return (
        <section className='sec-icons'>
            <div className="side-icons">
                <ScrollToTop component={scrollToTopRef.current} className={`scroll-top-button ${isVisible ? 'visible' : ''}`} />
                <a className="github-link" href="https://github.com/DieS06"><img src={git} alt="Github link portfolio." /></a>
                <a className="behance-link" href="https://www.behance.net/jdiesequeirag0623"><img src={beh} alt="Behance link portfolio." /></a>
                <a className="insta-link" href="https://www.instagram.com/equix.digital/"><img src={insta} alt="Instagram link." /></a>
                <a className="linkedin-link" href="https://www.linkedin.com/in/diego-sequeira06/"><img src={linkedin} alt="Linkedin link." /></a>
                <div className='div-wsIcon'>
                <Link to={url} target="_blank" onClick={handleClick} className="whatsapp-icon">
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </Link>
                </div>         
            </div>
        </section>
    );
}
 
export default LinkIcons;

<button class="scroll-to-top scroll-top-button visible" aria-label="Scroll to top">
    <svg width="28" height="28" fill="black" viewBox="0 0 256 256">
        <path d="M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z"></path></svg></button>