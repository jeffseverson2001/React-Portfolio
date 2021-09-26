import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons'

document.body.classList.add("has-navbar-fixed-top");

export default function Nav() {
    //  Check window size for mobile
    const [windowSize, setWindowSize] = useState({ width: 900, height: 500 });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    }, []);

    //  Add toggle for Burger Menu  
    const [isActive, setActive] = useState("false");

    const toggleBurger = () => {
        setActive(!isActive);
    };


//  Desktop Nav
    if (windowSize.width > 1050) {
        return (
            <nav className="navbar is-moblie is-fixed-top is-link" role="navigation">
                <div className="navbar-menu">
                    <div className="navbar-brand margin-left">
                        <FontAwesomeIcon icon={faBatteryFull} size='3x' />
                    </div>
                    <div className="navbar-start">
                        <div className="navbar-item nav-strong margin-left has-text-light">Jeff Severson 1</div>
                    </div>
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item has-text-light">Homepage</Link>
                        <a className="navbar-item has-text-light" href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer">Github</a>
                        <a className="navbar-item has-text-light" href="https://www.linkedin.com/in/jeff-severson-880a02208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <Link to="/projects" className="navbar-item has-text-light">Projects</Link>
                        <Link to="/resume" className="navbar-item has-text-light">Resume</Link>
                        <Link to="/contact" className="navbar-item has-text-light">Contact</Link>
                    </div>
                </div>
            </nav>
        );

    } else {
//  Mobile Nav        
        return (
            <nav className="navbar is-fixed-top is-link" role="navigation">
                <div className="navbar-brand">
                    <div className="navbar-brand margin-left">
                        <FontAwesomeIcon icon={faBatteryFull} size='3x' />
                    </div>
                    <div className="navbar-item nav-strong margin-left has-text-light">Jeff Severson</div>
                    <div href="./" role="button" className="navbar-burger" onClick={toggleBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={isActive ? "navbar-menu is-moblie is-link" : "navbar-menu is-moblie is-link is-active"}>
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Homepage</Link>
                        <a className="navbar-item" href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer">Github</a>
                        <a className="navbar-item" href="https://www.linkedin.com/in/jeff-severson-880a02208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <Link to="/projects" className="navbar-item">Projects</Link>
                        <Link to="/resume" className="navbar-item">Resume</Link>
                        <Link to="/contact" className="navbar-item">Contact</Link>
                    </div>
                </div>
            </nav>
        );
    }

};