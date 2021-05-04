import React from "react";
import { Fade } from "react-reveal";

const Heading = ({ children }) => {
  return (
    <div className="flex justify-center wrapper xl:justify-start">
      <Fade left>
        <h1 className="w-4/5 md:w-3/5 lg:w-56% heading text-sjBlue">
          {children}
        </h1>
      </Fade>
    </div>
  );
};

export default Heading;
