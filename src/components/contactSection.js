import React from "react";
import { email as contactEmail, github, githubLink, linkedin, linkedinLink, phone } from "../data/contactInfo";
import { AtSymbolIcon } from "@heroicons/react/24/solid";

export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      <ul className="container px-5 py-10 mx-auto">
        <li className="text-center mb-5">
          <AtSymbolIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            If you are interested in working with me, feel free to contact me!
          </p>
        </li>
        <li className="flex flex-wrap w-full sm:w-1/2 sm:mx-auto sm:mb-2">
          <a className="min-h-max p-2 lg:w-1/2 md:w-1/2 w-full" href={"mailto:" + contactEmail}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                <p className="text-md text-green-600">EMAIL</p>
                <p className="text-indigo-400 leading-relaxed text-sm">{contactEmail}</p>
              </span>
            </div>
          </a>
          <a className="min-h-max p-2 lg:w-1/2 md:w-1/2 w-full" href={"tel:" + phone.replace(/[^0-9+]/g, "")}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                <p className="text-md text-green-600">PHONE</p>
                <p className="text-indigo-400 leading-relaxed text-sm">{phone}</p>
              </span>
            </div>
          </a>
          <a className="min-h-max p-2 lg:w-1/2 md:w-1/2 w-full" href={githubLink}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                <p className="text-md text-green-600">GITHUB</p>
                <p className="text-indigo-400 leading-relaxed text-sm">{github}</p>
              </span>
            </div>
          </a>
          <a className="min-h-max p-2 lg:w-1/2 md:w-1/2 w-full" href={linkedinLink}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                <p className="text-md text-green-600">LINKEDIN</p>
                <p className="text-indigo-400 leading-relaxed text-sm">{linkedin}</p>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}