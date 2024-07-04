import React from "react";
import "./contact.css";
import myPic from "/vite.svg";
import { Bio } from "../../Data/constants";
import ContactMap from "./ContactMap";
const Contact = () => {
  return (
    <div id="contact" className="w-5/6 px-6 pb-6 mx-auto">
      <div className="exp-section contact-section mt-8 flex flex-col justify-center items-center gap-6">
        <h2 className="w-full pr-8">Reach Out to Me!</h2>
        <div className="contact-container w-full flex justify-between items-center gap-10">
          <div className="my-contact-desc w-5/6">
            {/* <div className="flex-row w-full flex justify-around items-center flex-wrap"> */}
          {ContactMap(Bio)}
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
