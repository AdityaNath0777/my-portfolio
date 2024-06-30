import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./navStyle.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="w-full px-8 mb-8">
        <ul
          className="nav-list flex flex-wrap justify-between items-center px-2 mb-4 text-xl"
          style={{ fontFamily: "courier new" }}
        >
          <li className="portfolio-name mx-auto">
            <a
              href="https:/github.com/AdityaNath0777/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              {"<Aditya Mishra/>"}
            </a>
          </li>
    <Router>
          <li className="w-full">
            <ul className="nav-link-container">
              <li className="active nav-link">
                <Link path="/about" to={"#about"}>
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link to={"#skills"}>Skills</Link>
              </li>
              <li className="nav-link">
                <Link to={"#experience"}>Experience</Link>
              </li>
              <li className="nav-link">
                <Link to={"#projects"}>Projects</Link>
              </li>
              <li className="nav-link">
                <Link to={"#education"}>Education</Link>
              </li>
              <li className="nav-link">
                <Link to={"#contact"}>Contact</Link>
              </li>
              <li className="">
                <Link to={"#toggle-switch"}>Toggle Theme</Link>
              </li>
            </ul>
          </li>
    </Router>
        </ul>
      </nav>
  );
};

export default Navbar;
