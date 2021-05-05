import { useState } from "react";
import { Fade } from "react-reveal";

//components
import ClientLogos from "../components/ClientLogos";
import Heading from "../components/Heading";
import TextInput from "../components/TextInput";
import Circle from "../components/Circle";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
  });
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
  });

  // console.log(error);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const submitForm = () => {
    const { name, email, companyName, title, message } = details;

    if (name === "") {
      return setError({
        email: "",
        companyName: "",
        title: "",
        message: "",
        name: "This field can't be empty",
      });
    }

    if (email === "") {
      return setError({
        name: "",
        companyName: "",
        title: "",
        message: "",
        email: "This field can't be empty",
      });
    }

    if (companyName === "") {
      return setError({
        name: "",
        email: "",
        title: "",
        message: "",
        companyName: "This field can't be empty",
      });
    }

    if (title === "") {
      return setError({
        name: "",
        email: "",
        companyName: "",
        message: "",
        title: "This field can't be empty",
      });
    }

    if (message === "") {
      return setError({
        name: "",
        email: "",
        companyName: "",
        title: "",
        message: "This field can't be empty",
      });
    }

    setDetails({
      name: "",
      email: "",
      companyName: "",
      title: "",
      message: "",
    });
    // console.log({
    //   ...details,
    //   newsletter,
    // });
  };

  return (
    <>
      <Circle />

      <Heading>Submit a help request and we’ll get in touch shortly.</Heading>

      <div className="wrapper">
        <div className="grid gap-20 xl:grid-cols-2">
          <Fade left cascade>
            <div className="space-y-10">
              <form className="space-y-10">
                <TextInput
                  type="text"
                  name="name"
                  value={details.name}
                  placeholder="Name"
                  error={error.name}
                  onChange={handleChange}
                />
                <TextInput
                  type="email"
                  name="email"
                  value={details.email}
                  placeholder="Email Address"
                  error={error.email}
                  onChange={handleChange}
                />
                <TextInput
                  type="text"
                  name="companyName"
                  value={details.companyName}
                  placeholder="Company Name"
                  error={error.companyName}
                  onChange={handleChange}
                />
                <TextInput
                  type="text"
                  name="title"
                  value={details.title}
                  placeholder="Title"
                  error={error.title}
                  onChange={handleChange}
                />
                <TextInput
                  type="textarea"
                  name="message"
                  value={details.message}
                  placeholder="Message"
                  error={error.message}
                  onChange={handleChange}
                />
              </form>

              <div className="flex items-center space-x-5">
                <input
                  type="checkbox"
                  name=""
                  className={`border-0 focus:ring-0 bg-lsjBlue bg-opacity-40 cursor-pointer ${
                    newsletter && "text-darkPink"
                  }`}
                  onChange={(e) => {
                    setNewsletter(e.target.checked);
                  }}
                />

                <p className="text-sjBlue ">
                  Stay up-to-date with company announcements and updates to our
                  API
                </p>
              </div>

              <div>
                <button className="outline-btn" onClick={submitForm}>
                  Submit
                </button>
              </div>
            </div>
          </Fade>

          <div className="flex flex-col items-center justify-center space-y-14">
            <Fade distance="60px" left>
              <h3 className="text-2xl text-center text-sjBlue xl:text-left">
                Join the thousands of innovators already building with us
              </h3>
            </Fade>

            <ClientLogos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
