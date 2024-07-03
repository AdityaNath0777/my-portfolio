import React from "react";
import { education } from "../../Data/constants";
import myPic from "/vite.svg";
import { MyEdu } from "./MyEdu";
import "./edu.css";

const Education = () => {
  // console.log(window.screen.availWidth);
  return (
    <div id="education" className="w-5/6 px-6 py-4 mb-8">
      <div className="exp-section mt-8 flex flex-col justify-center items-center">
        <h2>My Education</h2>
        <div className="exp-container w-full flex flex-col justify-center items-center gap-3">
          <img src={myPic} alt="" style={{ width: "100px", height: "100px" }} />
          <div className="exp-list w-4/6 flex flex-col justify-center items-center gap-3 mx-auto ">
            {education.map(MyEdu)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
