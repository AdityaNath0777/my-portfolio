import React from "react";
import "./contact.css";
import myPic from "/vite.svg";
import { ProjectMap } from "../Projects/ProjectMap";
import { myProjects } from "../../Data/constants";
const Contact = () => {
  return (
    <div id="contact" className="w-5/6 px-6 pb-6 mx-auto">
      <div className="exp-section contact-section mt-8 flex flex-col justify-center items-center gap-6">
        <h2 className="text-right w-full pr-8">Reach Out to Me</h2>
        <div className="exp-container contact-container w-full grid grid-cols-2 gap-10">
          <div className="my-contact-desc w-full">
            {/* <div className="flex-row w-full flex justify-around items-center flex-wrap"> */}
            {ProjectMap(myProjects[0])}
          </div>
          <div className="my-pic-container">
            <img src={myPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
