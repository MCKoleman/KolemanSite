import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects, featuredProject } from "../data/data";

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
            From raytracers and calculators to websites and games, I've worked on both front-end and back-end programming extensively. Hover over any project for a link to the source code!
          </p>
        </li>
        <li className="flex flex-wrap">
          <RenderProject project={featuredProject} fullWidth={true}/>
        </li>
        <li className="flex flex-wrap">
          {projects.map((project) => (
            <RenderProject project={project} fullWidth={false}/>
          ))}
        </li>
      </ul>
    </section>
  );
}

function RenderProject(props)
{
  const project = props.project;
  const className = props.fullWidth ? "sm:w-full w-100 p-3 h-[650px]" : "sm:w-1/2 w-100 p-3 h-[300px]";
  return (
    <a href={project.link /*"/projects/" + project.id*/}
      key={project.gif}
      className={className}>
      <div className="flex relative h-full">
        <img alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
          src={project.gif}
        />
        <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-800 bg-gray-900 rounded-xl opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {project.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {project.title}
          </h1>
          <div className="flex justify-center">
            <p className="leading-relaxed max-w-[400px]">{project.description}</p>
          </div>
          {(project.github && project.github !== "") ? (
            <a href={project.github}
              className="hover:opacity-60">
              <img alt="github"
                className="absolute inset-10 w-16 h-16"
                src="/images/githubLogo.png"
              />
            </a>
          ) : (<></>)}
        </div>
      </div>
    </a>
  );
}