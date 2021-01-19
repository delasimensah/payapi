import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";

//icons
import Logo from "../public/logo.svg";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const addBodyStyle = () => {
      if (isOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    addBodyStyle();
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between wrapper md:justify-start ">
      <div className="md:w-1/5">
        <Link href="/">
          <a>
            <Logo className="fill-current text-sjBlue" />
          </a>
        </Link>
      </div>

      <div className="justify-between hidden md:w-4/5 md:flex">
        <ul className="z-50 flex items-center space-x-10 md:pl-14 lg:pl-0">
          {links.map(({ text, link }, idx) => {
            return (
              <li key={idx}>
                <Link href={link}>
                  <a className="font-bold capitalize text-lsjBlue hover:text-sjBlue">
                    {text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="z-50">
          <Link href="/contact">
            <a className="demo-btn">Schedule a Demo</a>
          </Link>
        </div>
      </div>

      <div className="z-50 md:hidden">
        <button className="" onClick={toggleMenu}>
          <img src="/assets/shared/mobile/menu.svg" alt="menu-icon" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75">
          {/* menu start */}
          <Slide right>
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-16">
              <div className="relative w-screen">
                <div className="flex flex-col h-full py-6 bg-mirageBlue">
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full px-5 space-y-10 divide-y divide-lsjBlue">
                        <div className="flex justify-end">
                          <button
                            className="p-0 bg-transparent focus:outline-none"
                            onClick={toggleMenu}
                          >
                            <img
                              src="/assets/shared/mobile/close.svg"
                              alt="close-icon"
                            />
                          </button>
                        </div>

                        <div className="flex flex-col items-center justify-center py-10 space-y-10">
                          <ul className="space-y-5">
                            {links.map(({ text, link }, idx) => {
                              return (
                                <li key={idx} className="text-center">
                                  <Link href={link}>
                                    <a
                                      className="text-xl font-bold text-gray-300 capitalize"
                                      onClick={toggleMenu}
                                    >
                                      {text}
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>

                          <div className="flex justify-center">
                            <Link href="/contact">
                              <a
                                className="px-12 py-3 demo-btn"
                                onClick={toggleMenu}
                              >
                                Schedule a Demo
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* menu end */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
