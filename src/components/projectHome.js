import React from "react";
import ProjectsSection from "./projectsSection";
import GamesSection from "./gamesSection";
import { projects } from "../data/data";

export default function ProjectHome() {
    return (
        <div>
            <ProjectsSection/>
            <GamesSection/>
        </div>
    );
}