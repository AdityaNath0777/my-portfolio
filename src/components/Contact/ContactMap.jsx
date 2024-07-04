import React from 'react'
import SocialLinks from '../socialLinks/SocialLinks';

const ContactMap = (prop) => {
    return (
          <div className="my-exp-container p-4 w-full max-h-fit">
            <div className="exp-top flex flex-col items-start justify-start gap-3 mb-2">
              <div className="exp-img-box">
                {/* <img src="/vite.svg" alt="" /> */}
              <p className="contact-tag-line">{prop.tagLine}</p>
              </div>
              <div className="exp-right-box flex justify-start w-full flex-col gap-1">
                <p className="exp-skills flex flex-wrap gap-2">
                {""} {prop.title}
                </p>
                <h3 className='contact-name'>{`${prop.firstName} ${prop.lastName}`}</h3>
                <p className='contact-address'>
                  {`${prop.city}, ${prop.state}, ${prop.country} `}
                </p>
              </div>
            </div>
            <div className="exp-bottom flex flex-col justify-center">
              {/* <p className="exp-desc">{prop.tagLine}</p> */}
              <div className="mySocials">
                <SocialLinks prop={prop} />
              </div>
            </div>
          </div>
        // </div>
      );
}

export default ContactMap;