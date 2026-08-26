import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">

        <a className="navbar-brand" href="#home">
          MyPortfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="bi bi-person"></i> About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                <i className="bi bi-gear"></i> Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <i className="bi bi-folder"></i> Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="bi bi-envelope"></i> Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;