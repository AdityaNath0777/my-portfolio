import React from "react";

export const MyEdu = (prop) => {
  return (
    <div className="my-exp-container w-full my-2 p-5">
      <div className="exp-top flex items-center gap-3 mb-2">
        <div className="exp-right-box flex flex-col gap-1">
          <h3>{`${prop.courseName} - ${prop.branch}`}</h3>         
          <p style={{color: "slategray"}} >
            {prop.duration.start} - {prop.duration.end}{" "}
            {prop.duration.expectedEnd ? "(Expected)" : ""}
          </p>
        </div>
      </div>
      <div className="exp-bottom flex flex-col flex-wrap justify-center">
        <p className="exp-desc">{prop.institute}</p>
      </div>
    </div>
  );
};
