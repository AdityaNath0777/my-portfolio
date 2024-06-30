import React from "react";
import { Bio, techStack } from "../../Data/constants";
import myPic from "/vite.svg";
import './skill.css';

const Skills = () => {


  const mySkill = (prop) => {
    console.log(prop.name);
    return (
      <div className="my-skill border-2  border-gray-400 text-gray-400 " style={{ display: "inline-block" }}>
        <span>{prop.name}</span>
      </div>
    );
  };

  return (
    <div id="skills" className="w-full px-6 py-4 mt-6 mx-auto mb-8">
      <div className="skill-section mt-8 w-5/6 m-auto flex justify-center items-center">
        <div className="right-section w-2/5 flex justify-center items-center">
          <img src={myPic} alt="" style={{ width: "100px", height: "100px" }} />
        </div>
        <div className="left-section flex flex-col  px-6 justify-center items-start w-3/5">
          <div className="my-skill-container">
            <h1 className="">{"My Skills"}</h1>

            <p> {techStack.map(mySkill)}</p>

            <p className="my-desc">
              {/* {Bio.description}{" "} */}
              {
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam atque deserunt, sint pariatur. "
              }
            </p>
            <p className="my-desc">
              {/* {Bio.description}{" "} */}
              {
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam atque deserunt, sint pariatur."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
