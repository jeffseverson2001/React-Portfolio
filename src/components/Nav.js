import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons'

document.body.classList.add("has-navbar-fixed-top");

export default function Nav() {
    const [windowSize, setWindowSize] = useState({ width: 1200, height: 500 });

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    }, []);

    const [toggleBurger, setToggleBurger] = useState(false);

    const burgerToggle = (event) => {
        event.preventDefault();
        setToggleBurger(true);
    };

    //const burgerIcon = document.querySelector("#burger");
    //const navbarMenu = document.querySelector("#nav-links");

    //burgerIcon.addEventListener("click", () => {
    //    navbarMenu.classList.toggle("is-active");
    //});

    if (windowSize.width > 1050) {
        return (
            <nav className="navbar is-moblie is-fixed-top is-link" role="navigation">
                <div className="navbar-menu is-active">
                    <div className="navbar-brand margin-left">
                        <FontAwesomeIcon icon={faBatteryFull} size='3x' />
                    </div>
                    <div className="navbar-start">
                        <div className="navbar-item nav-strong margin-left has-text-light">Jeff Severson</div>
                    </div>
                    <div className="navbar-end">
                        <a href="/" className="navbar-item has-text-light">Homepage</a>
                        <a className="navbar-item has-text-light" href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer">Github</a>
                        <a className="navbar-item has-text-light" href="https://www.linkedin.com/in/jeff-severson-880a02208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="/projects" className="navbar-item has-text-light">Projects</a>
                        <a href="/resume" className="navbar-item has-text-light">Resume</a>
                        <a href="/contact" className="navbar-item has-text-light">Contact</a>
                    </div>
                </div>
            </nav>
        );

    } else {

        return (
            <nav className="navbar is-fixed-top is-link" role="navigation">
                <div class="navbar-brand">
                    <div className="navbar-brand margin-left">
                        <FontAwesomeIcon icon={faBatteryFull} size='3x' />
                    </div>
                    <div className="navbar-item nav-strong margin-left has-text-light">Jeff Severson</div>
                    <div href="/" role="button" className="navbar-burger" id="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="navbar-menu is-moblie" id="nav-links">
                    <div className="navbar-end">
                        <a href="/" className="navbar-item has-text-light">Homepage</a>
                        <a className="navbar-item has-text-light" href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer">Github</a>
                        <a className="navbar-item has-text-light" href="https://www.linkedin.com/in/jeff-severson-880a02208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="/projects" className="navbar-item has-text-light">Projects</a>
                        <a href="/resume" className="navbar-item has-text-light">Resume</a>
                        <a href="/contact" className="navbar-item has-text-light">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }


};