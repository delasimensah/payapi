import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

//components
import CallToAction from "../components/CallToAction";

const Home = () => {
  const logos = [
    "/assets/shared/desktop/tesla.svg",
    "/assets/shared/desktop/microsoft.svg",
    "/assets/shared/desktop/hewlett-packard.svg",
    "/assets/shared/desktop/oracle.svg",
    "/assets/shared/desktop/google.svg",
    "/assets/shared/desktop/nvidia.svg",
  ];

  const features = [
    {
      icon: "/assets/home/desktop/icon-personal-finances.svg",
      heading: "Personal Finances",
      text: `
      Consolidate financial data from multiple sources and categorize transactions up to
      2 years of history. Analyze reports to reconcile activities in your account.`,
    },
    {
      icon: "/assets/home/desktop/icon-banking-and-coverage.svg",
      heading: "Banking & Coverage",
      text: `
      With our platform, you can speed up account onboarding and support ongoing payments 
      for checking, savings, credit card, and brokerage accounts.`,
    },
    {
      icon: "/assets/home/desktop/icon-consumer-payments.svg",
      heading: "Consumer Payments",
      text: `
      It’s easier to set up secure bank payments with us through a flow designed with the 
      user experience in mind. Customers could instantly authenticate their account.`,
    },
  ];
  return (
    <>
      <img
        src="/assets/shared/desktop/bg-pattern-circle.svg"
        alt="bg-pattern-circle"
        className="absolute -top-52 md:-top-96 xl:-top-52 lg:-top-60 lg:-right-44 xl:-right-36 z-10 transform scale-150 md:scale-105 lg:scale-100"
      />

      <div className="wrapper grid lg:grid-cols-2 py-0">
        <div className="lg:col-start-2 flex items-center justify-center xl:items-start xl:justify-end">
          <img
            src="/assets/home/desktop/illustration-phone-mockup.svg"
            alt="illustration-phone-mockup"
            className="z-40 transform scale-90 md:scale-90 lg:scale-75 xl:scale-100 relative -top-16 -right-5 md:-top-10 md:-right-5 lg:-top-20 lg:-right-7 xl:-top-8 xl:right-0"
          />
        </div>

        <Fade left>
          <div className="lg:row-start-1 space-y-10 pb-32 lg:pb-0 lg:pt-28">
            <h1 className="text-sjBlue text-center leading-tight text-32 md:px-20 lg:pl-0 lg:pr-12 lg:text-left md:text-5xl xl:text-6xl">
              Start building with our APIs for absolutely free.
            </h1>

            <div className="space-y-5">
              <div className="space-y-5 md:space-y-0 md:flex md:justify-center lg:justify-start">
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

              <span className="text-lsjBlue px-5 block text-center lg:text-left">
                Have any questions?{" "}
                <Link href="/contact">
                  <a className="font-bold text-sjBlue">Contact us</a>
                </Link>
              </span>
            </div>
          </div>
        </Fade>
      </div>

      <div className="wrapper bg-mirageBlue text-lwWhite overflow-hidden">
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          alt="bg-pattern-circle"
          className="absolute -top-52 md:-top-576 lg:-top-96 lg:-left-40 left-0 transform scale-105"
        />
        <div className="py-10 space-y-10 xl:grid xl:grid-cols-2 xl:gap-10">
          <Fade left cascade>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 xl:gap-0 xl:col-start-2">
              {logos.map((logo, idx) => {
                return (
                  <div className="flex justify-center items-center" key={idx}>
                    <img src={logo} alt="logo" className="" />
                  </div>
                );
              })}
            </div>
          </Fade>

          <div className="space-y-16 xl:row-start-1">
            <div className="space-y-5">
              <h1 className="heading">Who we work with</h1>

              <p className="text-lsjBlue text-center md:px-28 lg:px-32 xl:px-0 xl:text-left">
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </p>
            </div>

            <div className="flex justify-center xl:justify-start">
              <Link href="/about">
                <a className="light-btn">About Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper py-10 grid xl:grid-cols-2">
        <Fade left>
          <div className="flex justify-center items-center">
            <img
              src="/assets/home/desktop/illustration-easy-to-implement.svg"
              alt="illustration-easy-to-implement"
              className="transform scale-105"
            />
          </div>
        </Fade>

        <div className="space-y-5 xl:flex xl:flex-col xl:justify-center">
          <h1 className="heading text-sjBlue">Easy to implement</h1>

          <p className="text-center xl:text-left text-lsjBlue md:px-10 xl:px-0">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>

      <div className="wrapper overflow-hidden">
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          alt="bg-pattern-circle"
          className="absolute -right-80 -top-10 hidden xl:block"
        />
        <div className="py-10 grid xl:grid-cols-2">
          <Fade left>
            <div className="flex justify-center items-center xl:col-start-2">
              <img
                src="/assets/home/desktop/illustration-simple-ui.svg"
                alt="illustration-simple-ui"
                className="transform scale-105"
              />
            </div>
          </Fade>

          <div className="space-y-5 xl:flex xl:flex-col xl:justify-center xl:row-start-1">
            <h1 className="heading text-sjBlue">Simple UI & UX</h1>

            <p className="text-center xl:text-left text-lsjBlue md:px-10 xl:px-0">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <Fade bottom cascade>
          <div className="grid gap-10 py-10 md:grid-cols-3">
            {features.map((feature, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center space-y-5"
                >
                  <img src={feature.icon} alt={feature.heading} />
                  <h1 className="text-center text-sjBlue text-xl">
                    {feature.heading}
                  </h1>
                  <p className="text-center text-lsjBlue">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>

      <CallToAction />
    </>
  );
};

export default Home;
