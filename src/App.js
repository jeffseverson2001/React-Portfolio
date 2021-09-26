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
        <Route path="./projects">
          <Profile />
        </Route>
        <Route path="./resume">
          <Resume />
        </Route>
        <Route path="./contact">
          <Contact />
        </Route>
        <Route path="./">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

