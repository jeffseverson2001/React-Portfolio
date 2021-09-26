import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className="container is-fluid">
            <div className="content m-6">
                <h2>Contact Me</h2>
                <p>
                    I would enjoy chatting with you about any ideas or opportunities that you have.  Please contact me below.<br />
                    Thanks.
                </p>
            </div>
            <div className="content has-text-left is-size-6 m-6">
                <a href="./contact"><FontAwesomeIcon icon={faPhone} size='1x' /> 763-220-0777</a>
                <br />
                <a href="mailto:jeff@jefflizseverson.com"><FontAwesomeIcon icon={faEnvelope} size='1x' /> jeff@jefflizseverson.com</a>
                <br />
                <a href="https://github.com/jeffseverson2001" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='1x' /> jeffseverson2001</a>
            </div>
        </div>
    );
};
