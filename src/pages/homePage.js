import React from "react";
import AboutSection from '../components/about.js';
import ContactSection from '../components/contact.js';
import ProjectsSection from '../components/projects.js';
import GamesSection from '../components/games';
import SkillsSection from '../components/skills.js';

export default function HomePage() {
  return (
    <>
        <AboutSection/>
        <ProjectsSection/>
        <GamesSection/>
        <SkillsSection/>
        <ContactSection/>
    </>
  );
}