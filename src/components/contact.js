import React from "react";
import { email as contactEmail, github, githubLink, discord, discordLink, phone, contactBG } from "../data/contactInfo";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex md:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 w-full bg-gray-900 rounded-lg overflow-hidden md:mr-10 p-10 flex items-end justify-start relative">
          <img alt="Contact Background"
            width="100%"
            height="100%"
            className="sm:block hidden border-4 border-gray-800 bg-gray-900 rounded-xl absolute inset-0 w-full"
            src={contactBG}/>
          <div className="grid grid-cols-2 grid-rows-1 bg-gray-900 xl:w-2/3 w-full relative py-6 rounded-lg shadow-lg">
            <ul className="grid grid-cols-1 sm:grid-rows-2 md:w-2/3 w-1/2 px-6 py-0 mt-4 flex justify-center items-center">
              <li className="w-full">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed"
                  href={"mailto:" + contactEmail}>
                  {contactEmail}
                </a>
              </li>
              <li className="w-full">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  PHONE
                </h2>
                <p className="text-indigo-400 leading-relaxed">{phone}</p>
              </li>
            </ul>
            <ul className="grid grid-cols-1 sm:grid-rows-2 md:w-1/3 w-1/2 px-6 py-0 mt-4 flex justify-center items-center">
              <li className="w-full">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  DISCORD
                </h2>
                <a className="text-indigo-400 leading-relaxed" href={discordLink}>
                  {discord}
                </a>
              </li>
              <li className="w-full">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  GITHUB
                </h2>
                <a className="text-indigo-400 leading-relaxed" href={githubLink}>
                  {github}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form
          netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            If you would be interested in working with me or would like to reach out to me for any reason,
            feel free to contact me through this form.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}