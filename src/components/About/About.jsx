import React from "react";
import myPic from "/vite.svg";
import { Bio } from "../../Data/constants";
import "./about.css";
import SocialLinks from "../socialLinks/SocialLinks";

const About = () => {
  const myDecode = (str) =>  {
    function returnCode() {
      if (unescape(str) !== null || unescape(str) !== undefined) {
        return unescape(str);
      } else {
        return decodeURI(str);
      }
    }
    let decodedVal = returnCode();
    return decodedVal;
  };

  return (
    <div id="about" className="w-full mx-auto"> {" "}
      <div className="about-section px-6 py-20 w-5/6 m-auto flex justify-center items-center">
        <div className="left-section flex flex-col  px-6 justify-center items-start w-3/5">
          <div className="my-container">
            <h1 className="">{"Namaste,"}</h1>
            <h1 className="">
              {"I am "}
              <span className="my-name ">{`${Bio.firstName} ${Bio.lastName}`}</span>
            </h1>
            <p className="my-desc">
              {Bio.description}
            </p>
            <div className="my-about-socials w-3/5 p-3">
              <SocialLinks prop={Bio} />
            </div>
            <div className="my-btn flex w-full justify-between items-center">
              <button className=" bg-sky-600/70 px-3 py-2 my-4 hover:bg-sky-800/80" >Contact Me</button>
              <button 
                className="bg-sky-600/80 px-3 py-2 my-4 hover:bg-sky-800/80"
                onClick={(e) => {alert("you thinks it's my Resume?, but it'me DIO")}}
                >
                {"My Resum"}
                {myDecode("%e9")}
              </button>
            </div>
          </div>
        </div>
        <div className="right-section w-2/5 flex justify-center items-center">
          <img src={myPic} alt="" style={{ width: "100px", height: "100px" }} />
        </div>
      </div>
    </div>
  );
};

export default About;