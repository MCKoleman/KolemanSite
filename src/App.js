import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.js';

import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import HomePage from './pages/homePage.js';
import GamesPage from './components/games.js';

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
      <Router>
        <ScrollToTop />
        <Navbar />
        <div>
          <Route exact path = "/" component={HomePage}/>
          <Route exact path = "/games" component={GamesPage}/>
        </div>
      </Router>
    </main>
  );
}

export default App;
