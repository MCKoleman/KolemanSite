import React from 'react';
import Navbar from './components/navbar.js';
import ScrollToTop from './utils/scrollToTop.js';

import Footer from './components/footer.js';
import HomePage from './pages/homePage.js';
import ProjectsPage from './components/projectsPage.js';
import ProjectHome from './components/projectHome.js';

function App() {
  const [dimensions, setDimensions] = React.useState({
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
        <ScrollToTop />
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
