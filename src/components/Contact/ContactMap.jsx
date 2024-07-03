import React from 'react'

const ContactMap = () => {
    return (
          <div className="my-exp-container p-4 w-full max-h-fit">
            <div className="exp-top flex flex-col items-start justify-start gap-3 mb-2">
              <div className="exp-img-box">
                <img src="/vite.svg" alt="" />
              </div>
              <div className="exp-right-box flex justify-start w-full flex-col gap-1">
                <p className="exp-skills flex flex-wrap gap-2">
                  {prop.tags.map((skill) => {
                    return (
                      <span className="flex" style={{ fontSize: "0.9rem" }}>
                        {skill}
                      </span>
                    );
                  })}
                </p>
                <h3>{prop.name}</h3>
                <p>
                  {prop.duration.start} to {prop.duration.end}
                </p>
              </div>
            </div>
            <div className="exp-bottom flex flex-col justify-center">
              <p className="exp-desc">{prop.desc}</p>
            </div>
          </div>
        // </div>
      );
}

export default ContactMap;