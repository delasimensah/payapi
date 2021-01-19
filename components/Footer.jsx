import React from "react";
import Link from "next/link";

//icons
import Logo from "../public/logo.svg";
import Facebook from "../public/assets/shared/desktop/facebook.svg";
import Twitter from "../public/assets/shared/desktop/twitter.svg";
import Linkedin from "../public/assets/shared/desktop/linkedin.svg";

const links = [
  {
    text: "pricing",
    link: "/pricing",
  },
  {
    text: "about",
    link: "/about",
  },
  {
    text: "contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="overflow-hidden text-white wrapper bg-mirageBlue">
      <img
        src="/assets/shared/desktop/bg-pattern-circle.svg"
        alt="bg-pattern-circle"
        className="absolute right-0 transform scale-105 -bottom-48 md:-top-10 md:-right-72 lg:-right-96"
      />

      <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:justify-start md:space-y-0 md:space-x-10">
        <div className="md:w-1/5">
          <Link href="/">
            <a>
              <Logo className="text-white fill-current" />
            </a>
          </Link>
        </div>

        <div className="space-y-10 md:w-4/5 md:space-y-0 md:flex md:justify-between">
          <ul className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            {links.map((link, idx) => {
              return (
                <li key={idx} className="z-50">
                  <Link href={link.link}>
                    <a className="font-bold capitalize text-lsjBlue hover:text-lwWhite">
                      {link.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex space-x-5">
            <Facebook className="social-icon" />
            <Twitter className="social-icon" />
            <Linkedin className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
