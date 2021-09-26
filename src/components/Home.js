import React from 'react';

import jeffImage from '../images/Jeff_Blue.jpg';

export default function Home() {
    return (
        <div>
            <figure className="image">
                <img className="main-image is-rounded mx-auto" src={jeffImage} alt="Jeff" />
            </figure>
            <section className="content">
                <div className="content m-6">
                    <h2>The Web Developer</h2>
                    <p>
                        I'm a web developer from Anoka, Minnesota and I have spent the last 10+ years as a backend PHP/MYSQL
                        developer.I decided that it was time to
                        make the leap to become a full stack developer, and am now certified in HTML, CSS, 
                        jQuery/JavaScript and React.<br /><br />
                        I really enjoy helping small businesses find ways to improve their processes by using web
                        technologies.I also enjoy spending time with my wife and dogs when I am not watching football. 
                        I am currently finishing my official web developer training at the University of Minnesota full
                        stack web developer coding boot-camp.
                    </p>
                </div>
            </section>
        </div>
    );
}