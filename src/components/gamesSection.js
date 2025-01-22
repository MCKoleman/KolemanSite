import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import React from "react";
import { games } from "../data/data.js";

export default function GamesSection() {
  return (
    <section id="games" className="text-gray-400 bg-gray-900 body-font">
        <ul className="container px-5 py-10 mx-auto text-center lg:px-40">
            <li className="flex flex-col w-full mb-20">
                <ComputerDesktopIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Games I've Made
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Here are some of the more recent games that I've developed.
                    Some of these games were for work, others were for school, and others were simply fun personal projects.
                </p>
            </li>
            <li className="flex flex-wrap -m-4">
                {games.map((game) => (
                    <a href={game.link /*"/projects/" + game.id*/}
                        key={game.image}
                        className="sm:w-1/2 w-100 p-3 h-[350px]">
                        <div className="flex relative h-full">
                            <img alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                                src={game.gif}
                            />
                            <div className="relative z-10 w-full border-4 border-gray-800 bg-gray-900 rounded-xl opacity-0 hover:opacity-100">
                                <img alt={game.title}
                                    className="absolute inset-0 w-full h-full object-center rounded-xl"
                                    src={game.image}
                                    />
                                <div className="px-8 py-20 relative h-full w-full border-4 border-gray-800 bg-gray-900 rounded-xl opacity-90">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {game.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {game.title}
                                    </h1>
                                    <div className="flex justify-center">
                                        <p className="leading-relaxed max-w-[400px]">{game.description}</p>
                                    </div>
                                    <p className="tracking-widest text-sm title-font font-medium text-green-400 mt-1">
                                        {game.tools.join(", ").toString()}
                                    </p>
                                    {(game.github && game.github !== "") ? (
                                        <a href={game.github}
                                        className="hover:opacity-60">
                                        <img alt="github"
                                            className="absolute inset-10 w-16 h-16"
                                            src="/images/githubLogo.png"
                                        />
                                        </a>
                                    ) : (<></>)}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </li>
        </ul>
    </section>
  );
}