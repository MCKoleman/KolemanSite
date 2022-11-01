import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <ul className="container px-5 py-10 mx-auto text-center lg:px-40">
        <li className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            From raytracers and calculators to websites and games, I've worked on both front-end and back-end programming extensively.
          </p>
        </li>
        <li className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a href={"/projects/" + project.id}
              key={project.image}
              className="sm:w-1/2 w-100 p-3">
              <div className="flex relative min-h-full">
                <img alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={project.image}
                />
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-800 bg-gray-900 rounded-xl opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </li>
      </ul>
    </section>
  );
}