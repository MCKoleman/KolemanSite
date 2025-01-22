import React from 'react';
import ProjectsSection from './projectsSection.js';
import GamesSection from './gamesSection.js';
import SkillsSection from './skillsSection.js';
import AboutSection from './aboutSection.js';
import ClassesSection from './classesSection.js';
import ClientsSection from './clientsSection.js';

export default function HomePage() {
    return (
        <div>
            <AboutSection/>
            <ClientsSection/>
            <ProjectsSection/>
            <GamesSection/>
            <SkillsSection/>
            <ClassesSection/>
        </div>
    );
}