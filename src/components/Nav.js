import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav className="navbar is-fixed-top is-link" role="navigation">
            <div className="navbar-menu is-active">
                <div className="navbar-brand marginLeft">
                    <FontAwesomeIcon icon={faBatteryFull} size='3x' />
                </div>
                <div className="navbar-start">
                    <div className="navbar-item navStrong marginLeft has-text-light">Jeff Severson</div>
                </div>
                <div className="navbar-end">
                    <a href="#home-page" className="navbar-item has-text-light">Homepage</a>
                    <a href="https://github.com/jeffseverson2001" className="navbar-item has-text-light">Github</a>
                    <a href='https://www.linkedin.com/in/jeff-severson-880a02208/'
                        className="navbar-item has-text-light">LinkedIn</a>
                    <a href="#project-box" className="navbar-item has-text-light">Projects</a>
                    <a href="./assets/images/Jeff_Severson_Resume.pdf" className="navbar-item has-text-light">Resume</a>
                    <a href="#contact-info" className="navbar-item has-text-light">Contact</a>
                </div>
            </div>
        </nav>
    );
};