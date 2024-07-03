import React from "react";
import { myProjects } from "../../Data/constants";
import myPic from "/vite.svg";
import { ProjectMap } from "./ProjectMap";
import "./project.css";

const Projects = () => {
  return (
    <div id="projects" className="w-5/6 px-6 py-4 mt-6 mx-auto mb-8">
      <div className="exp-section mt-8 flex flex-col justify-center items-center">
        <h2>My Projects</h2>
        <div className="exp-container w-full flex-col flex justify-center items-center gap-8">
          <img src={myPic} alt="" style={{ width: "100px", height: "100px" }} />
          <div className="grid my-projects-list grid-cols-3 gap-10">
            {myProjects.map(ProjectMap)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
