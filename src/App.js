import React from 'react';
import { Routes, BrowserRouter, Route, useParams } from 'react-router-dom';
import Navbar from './components/navbar.js';
import HomePage from './components/homePage.js';
import ContactSection from './components/contactSection.js';
import ProjectsPage from './components/projectsPage.js';
import ProjectHome from './components/projectHome.js';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path="/projects/:id" element={<ProjectsPage/>}/>
          <Route exact path="/projects" element={<ProjectHome/>}/>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
        <ContactSection />
      </BrowserRouter>
    </main>
  );
}

export default App;
