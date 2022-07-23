import React from "react";

const Navbar = () => {
  return (
    //   navbar
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="" className="navbar-brand">
          Bootstrap App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#learn" className="nav-link">
                What You'll Learn
              </a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">
                Questions
              </a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link">
                Instructors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
