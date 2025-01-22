import React from "react";
import { useParams } from "react-router-dom";
import { FindObj } from '../utils/maps.js';
import { projects, games } from "../data/data";

import ProjectHome from "./projectHome.js";
import Project404 from "./project404";
import BaseProjectPage from "./baseProjectPage";

export default function ProjectsPage() {
    let { id } = useParams();

    return (
        <RenderProject id={id}/>
    );
}

// Renders the project with the given ID
const RenderProject = (props) => {
    // Render home on both empty and explicit home
    if(props.id === "home") {
        return (
            <ProjectHome/>
        );
    }
    // Render the project if it exists
    else if(FindObj(projects, props.id)) {
        return (
            <BaseProjectPage list={projects} project={FindObj(projects, props.id)}/>
        );
    }
    else if(FindObj(games, props.id)) {
        return (
            <BaseProjectPage list={games} project={FindObj(games, props.id)}/>
        );
    }
    // Render a 404 page if the project doesn't exist
    else {
        return (
            <Project404/>
        );
    }
}