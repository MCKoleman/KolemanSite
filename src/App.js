import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';

import ContactSection from './components/contactSection.js';
import HomePage from './components/homePage.js';
import ProjectsPage from './components/projectsPage.js';
import ProjectHome from './components/projectHome.js';

function App() {
  const [, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  });
  
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
