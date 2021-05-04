import React from "react";
import { Fade } from "react-reveal";
import { useRouter } from "next/router";

import Tesla from "../public/assets/shared/desktop/tesla.svg";
import Microsoft from "../public/assets/shared/desktop/microsoft.svg";
import HP from "../public/assets/shared/desktop/hewlett-packard.svg";
import Oracle from "../public/assets/shared/desktop/oracle.svg";
import Google from "../public/assets/shared/desktop/google.svg";
import Nvidia from "../public/assets/shared/desktop/nvidia.svg";

const ClientLogos = () => {
  const { pathname } = useRouter();

  const logos = [
    <Tesla
      className={`text-white ${pathname === "/" && "text-white"}  ${
        pathname === "/contact" && "text-sjBlue"
      } fill-current`}
    />,
    <Microsoft
      className={`text-white ${pathname === "/" && "text-white"}  ${
        pathname === "/contact" && "text-sjBlue"
      } fill-current`}
    />,
    <HP
      className={`text-white ${pathname === "/" && "text-white"}  ${
        pathname === "/contact" && "text-sjBlue"
      } fill-current`}
    />,
    <Oracle
      className={`text-white ${pathname === "/" && "text-white"}  ${
        pathname === "/contact" && "text-sjBlue"
      } fill-current`}
    />,
    <Google
      className={`text-white ${pathname === "/" && "text-white"}  ${
        pathname === "/contact" && "text-sjBlue"
      } fill-current`}
    />,
    <Nvidia
      className={`text-white ${pathname === "/" && "text-white"}  ${
        pathname === "/contact" && "text-sjBlue"
      } fill-current`}
    />,
  ];

  return (
    <Fade left cascade>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 xl:gap-0 xl:col-start-2">
        {logos.map((logo, idx) => {
          return (
            <div className="flex items-center justify-center" key={idx}>
              {logo}
            </div>
          );
        })}
      </div>
    </Fade>
  );
};

export default ClientLogos;
