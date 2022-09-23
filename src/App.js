import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';

import About from './components/about.js';
import Contact from './components/contact.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Testimonials from './components/testimonials.js';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
