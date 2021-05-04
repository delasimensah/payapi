import React from "react";
import { Fade, Zoom } from "react-reveal";

//components
import Circle from "../components/Circle";
import AboutInfo from "../components/AboutInfo";
import Stat from "../components/Stat";
import Heading from "../components/Heading";

const About = () => {
  const about = [
    {
      title: " Our Vision",
      text: ` Our main goal is to build beautiful consumer experiences along with developer-friendly 
      infrastructure. The result is an intelligent tool that gives everyone the ability to create 
      amazing products that solve big problems. We are deeply focused on democratizing financial 
      services through technology.`,
    },
    {
      title: "Our Business",
      text: ` At the core of our platform is the technical infrastructure APIs that connect consumers. 
      Our innovative product provides key insights for businesses and individuals, as well as 
      robust reporting for traditional financial institutions and developers.`,
    },
    {
      title: " The Culture",
      text: ` We strongly believe there's always an opportunity to learn from each other outside of 
      day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
      We always value cross-team collaboration and diversity of thought, no matter the job title.`,
    },
    {
      title: " The People",
      text: ` We're all passionate about building a more efficient and inclusive financial infrastructure 
      together. At PayAPI, we have diverse backgrounds and skills.`,
    },
  ];

  const stats = [
    {
      text: "Team Members",
      stat: "300+",
    },
    {
      text: "Offices in the US ",
      stat: "3",
    },
    {
      text: "Transactions analyzed",
      stat: "10M+",
    },
  ];
  return (
    <>
      <Circle />

      <Heading>
        We empower innovators by delivering access to the financial system
      </Heading>

      <div className="space-y-10 lg:py-20 wrapper">
        {about.slice(0, 2).map(({ title, text }, idx) => {
          return <AboutInfo title={title} text={text} key={idx} />;
        })}
      </div>

      <img
        src="/assets/shared/desktop/bg-pattern-circle.svg"
        alt="bg-pattern-circle"
        className="absolute hidden transform scale-90 top-550 -left-500 xl:block"
        style={{ zIndex: -1 }}
      />

      <Zoom>
        <div className="z-50 bg-cover h-300 md:h-56 lg:h-450 bg-about-sm md:bg-about-md lg:bg-about" />
      </Zoom>

      <div className="py-14 wrapper">
        <div className="grid gap-10 border-t border-b md:grid-cols-3 md:border-0">
          {stats.map((stat, idx) => {
            return <Stat stat={stat} key={idx} />;
          })}
        </div>
      </div>

      <div className="py-20 space-y-10 wrapper">
        {about.slice(2).map(({ title, text }, idx) => {
          return <AboutInfo title={title} text={text} key={idx} />;
        })}
      </div>
    </>
  );
};

export default About;
