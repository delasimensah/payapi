import React from "react";
import { Fade } from "react-reveal";
import Check from "../public/assets/shared/desktop/icon-check.svg";

const Price = ({ info }) => {
  return (
    <Fade left>
      <div className="flex flex-col space-y-5">
        <div className="space-y-10">
          <h1 className="text-2xl text-center xl:text-left text-darkPink">
            {info.plan}
          </h1>
          <p className="text-center h-28 xl:text-left text-lsjBlue">
            {info.desc}
          </p>
          <h2 className="text-5xl text-center xl:text-left text-sjBlue">
            ${info.price}
          </h2>
        </div>

        <div className="flex flex-col items-center py-5 space-y-2 border-t border-b xl:items-start">
          {info.features.map((feature, idx) => {
            return (
              <div key={idx} className="flex items-center w-2/5 md:w-3/5">
                <div className="w-1/6">
                  {feature.available && (
                    <Check className="fill-current text-darkPink" />
                  )}
                </div>

                <div className="w-5/6">
                  <p
                    className={`text-lg font-light ${
                      feature.available
                        ? "text-lsjBlue"
                        : "text-lsjBlue text-opacity-40"
                    }`}
                  >
                    {feature.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center py-5 xl:justify-start">
          <button className="outline-btn">Request Access</button>
        </div>
      </div>
    </Fade>
  );
};

export default Price;
