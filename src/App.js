import React from 'react';
import Navbar from './components/navbar.js';

import AboutPage from './components/about.js';
import Contact from './components/contact.js';
import ProjectsPage from './components/projects.js';
import GamesPage from './components/games';
import SkillsPage from './components/skills.js';
import Socials from './components/socials.js';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <AboutPage />
      <ProjectsPage />
      <GamesPage />
      <SkillsPage />
      <Contact />
    </main>
  );
}

export default App;
