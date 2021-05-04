import React from "react";
import { Zoom } from "react-reveal";

const Stat = ({ stat: { text, stat } }) => {
  return (
    <Zoom>
      <div className="flex flex-col items-center justify-center py-5 space-y-3 md:border-t md:border-b md:items-start">
        <h1 className="font-light text-lsjBlue">{text}</h1>
        <p className="text-4xl font-semibold text-darkPink">{stat}</p>
      </div>
    </Zoom>
  );
};

export default Stat;
