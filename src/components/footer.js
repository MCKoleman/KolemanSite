import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { socials } from "../data/data.js";

export default function Footer() {
  return (
    <footer className="bg-cyan-900 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-content">
        <a href="/" className="mr-5 hover:text-white">Home</a>
        <a href="/games" className="mr-5 hover:text-white">Games</a>
      </div>
    </footer>
  );
}