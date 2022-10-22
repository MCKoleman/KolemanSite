import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import React from "react";
import { games } from "../data/data.js";

export default function GamesPage() {
  return (
    <section id="games" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <ComputerDesktopIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Games I've Made
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Here are some of the more recent games that I've developed.
                    Some of these games were for school, others were for work, and others were simply fun personal projects.
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {games.map((game) => (
                    <a href={game.link}
                        key={game.image}
                        className="sm:w-1/2 w-100 p-3">
                        <div className="flex relative min-h-full">
                            <img alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                                src={game.gif}
                            />
                            <div className="relative h-full border-4 border-gray-800 bg-gray-900 rounded-xl opacity-0 hover:opacity-100">
                                <img alt={game.title}
                                    className="absolute inset-0 w-full h-full object-center rounded-xl"
                                    src={game.image}
                                    />
                                <div className="relative min-h-full min-w-full  border-4 border-gray-800 bg-gray-900 rounded-xl opacity-90">
                                    <div className="px-8 py-20 relative min-h-full min-w-full">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {game.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {game.title}
                                        </h1>
                                        <p className="leading-relaxed">{game.description}</p>
                                        <p className="tracking-widest text-sm title-font font-medium text-green-400 mt-1">
                                            {game.tools.join(", ").toString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
}