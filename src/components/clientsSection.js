import { BriefcaseIcon } from "@heroicons/react/24/solid";
import React from "react";
import { clients } from "../data/data";

export default function ClientsSection() {
  return (
    <section id="clients">
      <ul className="container px-5 py-10 mx-auto">
        <li className="text-center">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Clients I've Worked With
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the clients I have built software for throughout my career.
          </p>
        </li>
        <li className="flex flex-wrap w-full lg:w-2/3 lg:mx-auto">
          {clients.map((client) => (
            <a key={client.title} className="min-h-max p-2 md:w-1/3 w-full" href={client.link}>
				<img alt={client.title}
					className="w-full h-full object-cover object-center rounded-xl"
					src={client.image}
					/>
            </a>
          ))}
        </li>
      </ul>
    </section>
  );
}