import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { socials } from "../data/data.js";

export default function Navbar() {
  return (
    <header className="bg-cyan-900 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/#about" className="ml-3 text-xl">
            Kristian Kolehmainen
          </a>
        </nav>
        <nav className="md:ml-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 md:mb-0 mb-4 flex flex-wrap items-center text-base justify-center">
          <a href="/#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/#games" className="mr-5 hover:text-white">
            Games
          </a>
          <a href="/#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            {socials.map((social) => (
              <a href={social.link} key={social.title} className="mr-5">
                  <img alt={social.title}
                      className="h-8 object-center"
                      src={social.image}
                      />
              </a>
            ))}
        </nav>
        <a href="#contact"
          className="inline-flex items-center bg-cyan-900 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-800 rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}