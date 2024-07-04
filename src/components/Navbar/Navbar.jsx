import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./navStyle.css";

const Navbar = () => {

  // // for educational purposes
  // const MyLink = () => {
  //   function NewTab() {
  //     window.open("https://github.com/AdityaNath0777", "_blank");
  //   }

  //   NewTab();
  // };

  const addActiveClassName = (e) => {
    function myFunc() {
      let navList = Array.from(document.getElementsByClassName("nav-link"));
      navList.forEach((element) => {
        element.firstChild.classList.remove("activeLink");
      });
      e.target.classList.add("activeLink");
    }

    myFunc();
  };

  return (
    <nav id="navbar" className="w-full px-8 mb-8">
      <ul
        className="nav-list flex flex-wrap justify-between items-center px-2 mb-4 text-xl"
        style={{ fontFamily: "courier new" }}
      >
        <li id="portfolio-to-github" className="portfolio-name mx-auto">
          {" "}
          {/* Keeping this method for Educational purposes  */}
          {/* <span style={{cursor: "pointer"}} onClick={MyLink}>{"< Aditya Mishra />"}</span> */}
          {/* simpler method */}
          <a href="https://github.com/AdityaNath0777/" target="_blank">
            {"< Aditya Mishra />"}
          </a>
        </li>
        <Router>
          <li className="w-full">
            <ul className="nav-link-container">
              <li className=" nav-link">
                <Link
                  className="activeLink"
                  path="/about"
                  to={"#about"}
                  onClick={(e) => {
                    addActiveClassName(e);
                  }}
                >
                  About
                </Link>
              </li>
              <li
                className="nav-link"
                onClick={(e) => {
                  addActiveClassName(e);
                }}
              >
                <Link
                  to={"#skills"}
                  onClick={(e) => {
                    addActiveClassName(e);
                  }}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to={"#experience"}
                  onClick={(e) => {
                    addActiveClassName(e);
                  }}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to={"#projects"}
                  onClick={(e) => {
                    addActiveClassName(e);
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to={"#education"}
                  onClick={(e) => {
                    addActiveClassName(e);
                  }}
                >
                  Education
                </Link>
              </li>
              <li className="nav-link">
                <Link
                  to={"#contact"}
                  onClick={(e) => {
                    addActiveClassName(e);
                  }}
                >
                  Contact
                </Link>
              </li>

              {/* will add this functionality later */}
              {/* <li className="">
                <Link to={"#toggle-switch"}>Toggle Theme</Link>
              </li> */}
              
            </ul>
          </li>
        </Router>
      </ul>
    </nav>
  );
};

export default Navbar;
