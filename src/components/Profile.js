import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons'
import { faBatteryHalf } from '@fortawesome/free-solid-svg-icons'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-solid-svg-icons'

import passwordSiteImage from './images/password.jpg';
import blogSiteImage from './images/blog.jpg';
import movieSiteImage from './images/movie.jpg';


export default function ProfileProjects() {
    return(
        <secion className="container is-flex-direction-row">
            <div className="columns is-mobile is-centered" id="project-box">
                <div className="column is-one-quarter has-background-link-light m-5">
                    <FontAwesomeIcon icon={faBatteryQuarter} size='2x' />
                    <a href="https://jeffseverson2001.github.io/03-JavaScript-Password-Generator/">
                    <FontAwesomeIcon icon={faLink} size='2x' /></a>
                    <a href="https://github.com/jeffseverson2001/03-JavaScript-Password-Generator">
                    <FontAwesomeIcon icon={faGithub} size='2x' /></a>
                    <img className="project-image mx-auto" src={passwordSiteImage} alt="Password Generator" />
                    <div className="center-sites"> Password Generator </div>
                </div>
                <div className="column is-one-quarter has-background-link-light m-5">
                <FontAwesomeIcon icon={faBatteryHalf} size='2x' />
                    <a href="https://jeffseverson2001-mvc-homework.herokuapp.com/">
                    <FontAwesomeIcon icon={faLink} size='2x' /></a>
                    <a href="https://github.com/jeffseverson2001/14-MVC-Blog">
                    <FontAwesomeIcon icon={faGithub} size='2x' /></a>
                    <img className="project-image mx-auto" src={blogSiteImage} alt="Blog" />
                    <div className="center-sites"> jBlog Site </div>
                </div>
                <div className="column is-one-quarter has-background-link-light m-5">
                <FontAwesomeIcon icon={faBatteryFull} size='2x' />
                    <a href="https://jeffseverson2001.github.io/what-should-i-watch/">
                    <FontAwesomeIcon icon={faLink} size='2x' /></a>
                    <a href="https://github.com/jeffseverson2001/what-should-i-watch">
                    <FontAwesomeIcon icon={faGithub} size='2x' /></a>
                    <img className="project-image mx-auto" src={movieSiteImage} alt="Movie" />
                    <div className="center-sites"> What Should I Watch </div>
                </div>
            </div>
        </secion>
    );
}