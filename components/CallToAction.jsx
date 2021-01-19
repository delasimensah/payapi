import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const CallToAction = () => {
  return (
    <div className="wrapper space-y-5 xl:flex xl:justify-between xl:items-center">
      <Fade left cascade>
        <div>
          <h1 className="heading text-sjBlue">Ready to start?</h1>
        </div>
      </Fade>

      <div className="space-y-5 md:space-y-0 md:flex md:justify-center xl:justify-end xl:items-center">
        <input
          type="text"
          className="bg-lwWhite shadow-md rounded-full w-full md:w-54%  px-5 py-3 focus:outline-none cursor-pointer"
          placeholder="Enter email address"
        />

        <Link href="/contact">
          <a className="demo-btn block text-center relative md:-left-10">
            Schedule a Demo
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
