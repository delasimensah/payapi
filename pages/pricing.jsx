import React from "react";

//components
import Heading from "../components/Heading";
import Price from "../components/Price";
import Circle from "../components/Circle";

const Pricing = () => {
  const pricing = [
    {
      plan: "Free Plan",
      desc: "Build and test using our core set of products with up to 100 API requests",
      price: "0.00",
      features: [
        {
          title: "Transactions",
          available: true,
        },
        {
          title: "Auth",
          available: true,
        },
        {
          title: "Identity",
          available: true,
        },
        {
          title: "Investments",
          available: false,
        },
        {
          title: "Assets",
          available: false,
        },
        {
          title: "Liabilities",
          available: false,
        },
        {
          title: "Income",
          available: false,
        },
      ],
    },
    {
      plan: "Basic Plan",
      desc: "Launch your project with unlimited requests and no contractual minimums",
      price: "249.00",
      features: [
        {
          title: "Transactions",
          available: true,
        },
        {
          title: "Auth",
          available: true,
        },
        {
          title: "Identity",
          available: true,
        },
        {
          title: "Investments",
          available: true,
        },
        {
          title: "Assets",
          available: true,
        },
        {
          title: "Liabilities",
          available: false,
        },
        {
          title: "Income",
          available: false,
        },
      ],
    },
    {
      plan: "Premium Plan",
      desc: "Get tailored solutions, volume pricing, and dedicated support for your team",
      price: "499.00",
      features: [
        {
          title: "Transactions",
          available: true,
        },
        {
          title: "Auth",
          available: true,
        },
        {
          title: "Identity",
          available: true,
        },
        {
          title: "Investments",
          available: true,
        },
        {
          title: "Assets",
          available: true,
        },
        {
          title: "Liabilities",
          available: true,
        },
        {
          title: "Income",
          available: true,
        },
      ],
    },
  ];
  return (
    <>
      <Circle />

      <Heading>Pricing</Heading>

      <div className="grid gap-10 wrapper md:grid-cols-3">
        {pricing.map((info, idx) => {
          return <Price info={info} key={idx} />;
        })}
      </div>
    </>
  );
};

export default Pricing;
