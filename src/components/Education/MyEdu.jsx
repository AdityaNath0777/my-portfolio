import React from "react";

export const MyEdu = (prop) => {
  return (
    <div className="my-exp-container my-2 p-5">
      <div className="exp-top flex items-center gap-3 mb-2">
        <div className="exp-img-box">
          <img src="/vite.svg" alt="" />
        </div>
        <div className="exp-right-box flex flex-col gap-1">
          <h3>{prop.role}</h3>
          <p>
            {prop.duration.start} to {prop.duration.end}
          </p>
        </div>
      </div>
      <div className="exp-bottom flex flex-col flex-wrap justify-center">
        <p className="exp-skills flex flex-wrap gap-2">
          {prop.skills.map((skill) => {
            return <span>{skill}</span>;
          })}
        </p>
        <p className="exp-desc">{prop.desc}</p>
      </div>
    </div>
  );
};
