import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer has-background-link" id="contact-info">
            <div className="container is-fluid">
                <div className="content has-text-centered is-size-6 white-text">
                    <a href="./contact" className="white-text"> <FontAwesomeIcon icon={faPhoneSquareAlt} size='1x' />  763-220-0777 </a> 
                    <br />
                    <a href="mailto:jeff@jefflizseverson.com" className="white-text"> <FontAwesomeIcon icon={faEnvelope} size='1x' />  jeff@jefflizseverson.com </a>
                    <br />
                    <a href="https://github.com/jeffseverson2001" className="white-text" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size='1x' />  jeffseverson2001 </a>
                </div>
            </div>
        </footer>
    )
}
