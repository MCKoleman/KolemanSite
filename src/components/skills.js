import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data/data";

export default function SkillsPage() {
  return (
    <section id="skills">
      <ul className="container px-5 py-10 mx-auto">
        <li className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I've worked with many more tools, technologies, and languages than I feel comfortable listing here.
            These are some of my strongest skills that I believe I can use in a professional capacity.
          </p>
        </li>
        <li className="flex flex-wrap lg:w-4/6 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </section>
  );
}