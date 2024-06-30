import React from "react";
import { experience } from "../../Data/constants";
import myPic from "/vite.svg";
import { MyExp } from "./ExpMap";
import "./exp.css";

const Experience = () => {
  return (
    <div id="experience" className="w-5/6 px-6 py-4 mt-6 mx-auto">
      <div className="exp-section mt-8 flex flex-col justify-center items-center">
        <h2>My Experience</h2>
        <div className="exp-container w-full flex flex-col justify-center items-center gap-3">
          <img src={myPic} alt="" style={{ width: "100px", height: "100px" }} />

          {experience.map(MyExp)}

        </div>
      </div>
    </div>
  );
};

export default Experience;
