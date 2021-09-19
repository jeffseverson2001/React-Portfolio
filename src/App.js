import React, { useState } from "react";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Profile from './components/Profile.js';
import Resume from "./components/Resume.js";


export default function App() {
  const [currentPage, setCurrentPage] = useState("Profile");

  const newPage = () => {
    if (currentPage === "Home") {
      return (
        <div>
          <Home />
        </div>
      );
    }
    if (currentPage === "Profile") {
      return (
        <div className="has-navbar-fixed-top">
          <Profile />
        </div>
      );
    }
    if (currentPage === "Resume") {
      return (
        <div>
          <Resume />
        </div>
      );
    }

  }
  

  const pageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} pageChange={pageChange} />
      {newPage()}
      
    </div>
  );

}

