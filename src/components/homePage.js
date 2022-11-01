import React from 'react';
import ProjectsSection from './projectsSection.js';
import GamesSection from './gamesSection.js';
import SkillsSection from './skillsSection.js';
import AboutSection from './aboutSection.js';

export default function HomePage() {
    return (
        <div>
            <AboutSection/>
            <ProjectsSection/>
            <GamesSection/>
            <SkillsSection/>
        </div>
    );
}