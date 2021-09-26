import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Profile from './components/Profile.js';
import Resume from "./components/Resume.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";


export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/React-Portfolio/projects">
          <Profile />
        </Route>
        <Route path="/React-Portfolio/resume">
          <Resume />
        </Route>
        <Route path="/React-Portfolio/contact">
          <Contact />
        </Route>
        <Route path="/React-Portfolio/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

