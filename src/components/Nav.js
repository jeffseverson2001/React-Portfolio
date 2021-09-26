import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons'

document.body.classList.add("has-navbar-fixed-top");

export default function Nav() {
    const [windowSize, setWindowSize] = useState({ width: 900, height: 500 });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    }, []);

    const [isActive, setActive] = useState("false");

    const toggleBurger = () => {
        setActive(!isActive);
    };


    if (windowSize.width > 1050) {
        return (
            <nav className="navbar is-moblie is-fixed-top is-link" role="navigation">
                <div className="navbar-menu">
                    <div className="navbar-brand margin-left">
                        <FontAwesomeIcon icon={faBatteryFull} size='3x' />
                    </div>
                    <div className="navbar-start">
                        <div className="navbar-item nav-strong margin-left has-text-light">Jeff Severson</div>
                    </div>
                    <div className="navbar-end">
                        <link href="./" className="navbar-item has-text-light" />Homepage
                        <link className="navbar-item has-text-light" href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer" />Github
                        <link className="navbar-item has-text-light" href="https://www.linkedin.com/in/jeff-severson-880a02208/" target="_blank" rel="noopener noreferrer" />LinkedIn
                        <link href="./projects" className="navbar-item has-text-light" />Projects
                        <link href="./resume" className="navbar-item has-text-light" />Resume
                        <link href="./contact" className="navbar-item has-text-light" />Contact
                    </div>
                </div>
            </nav>
        );

    } else {
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
                        <a href="./" className="navbar-item">Homepage</a>
                        <a className="navbar-item" href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer">Github</a>
                        <a className="navbar-item" href="https://www.linkedin.com/in/jeff-severson-880a02208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="./projects" className="navbar-item">Projects</a>
                        <a href="./resume" className="navbar-item">Resume</a>
                        <a href="./contact" className="navbar-item">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }

};