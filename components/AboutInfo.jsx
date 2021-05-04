import React from "react";
import { Fade } from "react-reveal";

const AboutInfo = ({ title, text }) => {
  return (
    <Fade cascade left>
      <div className="space-y-10 md:space-y-0 md:space-x-10 md:flex ">
        <div className="md:w-1/4 lg:w-1/5">
          <h3 className="text-2xl text-center md:text-left text-sjBlue">
            {title}
          </h3>
        </div>

        <div className="md:w-3/4 lg:w-4/5">
          <p className="text-center md:text-left text-lsjBlue">{text}</p>
        </div>
      </div>
    </Fade>
  );
};

export default AboutInfo;
