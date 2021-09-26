import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons'
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import passwordSiteImage from '../images/password.jpg';
import blogSiteImage from '../images/blog.jpg';
import movieSiteImage from '../images/movie.jpg';
import weatherSiteImage from '../images/weather.jpg';
import simpleCalendarSiteImage from '../images/planner.jpg';
import budgetTrackerSiteImage from '../images/budget.jpg';


export default function ProfileProjects() {
    return (
        <section className="container is-flex-direction-row">
            <div className="columns is-centered is-flex-wrap-wrap" id="project-box">

                <div className="column is-one-quarter has-background-link-light m-5">
                    <div className="center-sites"> What Should I Watch </div>
                    <div className="is-justify-content-end m-4">
                        <img className="project-image mx-auto" src={movieSiteImage} alt="Movie" />
                    </div>
                    <FontAwesomeIcon icon={faBatteryFull} size='2x' />
                    <a href="https://jeffseverson2001.github.io/what-should-i-watch/" target="_blank" rel="noopener noreferrer" className="m-3">
                        <FontAwesomeIcon icon={faLink} size='2x' /> Link</a>
                    <a href="https://github.com/jeffseverson2001/what-should-i-watch" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2x' /> Github</a>
                </div>

                <div className="column is-one-quarter has-background-link-light m-5">
                    <div className="center-sites"> jBlog Site </div>
                    <div className="is-justify-content-end m-4">
                        <img src={blogSiteImage} alt="Blog" />
                    </div>
                    <FontAwesomeIcon icon={faBatteryThreeQuarters} size='2x' />
                    <a href="https://jeffseverson2001-mvc-homework.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="m-3">
                        <FontAwesomeIcon icon={faLink} size='2x' /> Link</a>
                    <a href="https://github.com/jeffseverson2001/14-MVC-Blog" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2x' /> Github</a>
                </div>

                <div className="column is-one-quarter has-background-link-light m-5">
                    <div className="center-sites"> Weather Dashboard </div>
                    <div className="is-justify-content-end m-4">
                        <img className="project-image mx-auto" src={weatherSiteImage} alt="Weather" />
                    </div>
                    <FontAwesomeIcon icon={faBatteryFull} size='2x' />
                    <a href="https://jeffseverson2001.github.io/06-Server-Side-APIs-02-Homework/" target="_blank" rel="noopener noreferrer" className="m-3">
                        <FontAwesomeIcon icon={faLink} size='2x' /> Link</a>
                    <a href="https://github.com/jeffseverson2001/06-Server-Side-APIs-02-Homework" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2x' /> Github</a>
                </div>

                <div className="column is-one-quarter has-background-link-light m-5">
                    <div className="center-sites"> Password Generator </div>
                    <div className="is-justify-content-end m-4">
                        <img className="project-image mx-auto" src={passwordSiteImage} alt="Password Generator" />
                    </div>
                    <FontAwesomeIcon icon={faBatteryQuarter} size='2x' />
                    <a href="https://jeffseverson2001.github.io/03-JavaScript-Password-Generator/" target="_blank" rel="noopener noreferrer" className="m-3">
                        <FontAwesomeIcon icon={faLink} size='2x' /> Link</a>
                    <a href="https://github.com/jeffseverson2001/03-JavaScript-Password-Generator" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2x' /> Github</a>
                </div>

                <div className="column is-one-quarter has-background-link-light m-5">
                    <div className="center-sites"> Simple Calendar Tracker</div>
                    <div className="is-justify-content-end m-4">
                        <img className="project-image mx-auto" src={simpleCalendarSiteImage} alt="Calendar" />
                    </div>
                    <FontAwesomeIcon icon={faBatteryThreeQuarters} size='2x' />
                    <a href="https://jeffseverson2001.github.io/05-Third-Party-APIs-02-Homework/" target="_blank" rel="noopener noreferrer" className="m-3">
                        <FontAwesomeIcon icon={faLink} size='2x' /> Link</a>
                    <a href="https://github.com/jeffseverson2001/05-Third-Party-APIs-02-Homework" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2x' /> Github</a>
                </div>

                <div className="column is-one-quarter has-background-link-light m-5">
                <div className="center-sites"> Budget Tracker</div>
                <div className="is-justify-content-end m-4">
                        <img className="project-image mx-auto" src={budgetTrackerSiteImage} alt="Budget" />
                    </div>
                    <FontAwesomeIcon icon={faBatteryFull} size='2x' />
                    <a href="https://jeffseverson2001-budget-onoff.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="m-3">
                        <FontAwesomeIcon icon={faLink} size='2x' /> Link</a>
                    <a href="https://github.com/jeffseverson2001/18-NoSQL-02-Homework" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2x' /> Github</a>
                </div>

            </div>
        </section>
    );
}