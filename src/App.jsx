import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Directly import the pages without lazy loading
import Home from './pages/home';
import Apropos from './pages/apropos';
import Contact from './pages/contact';
import Galerie from './pages/galerie';
import HomePhone from './pages/homePhone';
import ContactPhone from './pages/contactPhone';
import AproposPhone from './pages/aproposPhone';
import Specialites from './pages/specialites';
import GaleriePhone from './pages/galeriePhone';
import SpecialitesPhone from './pages/specialitesPhone';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  const [isMobile, setIsMobile] = useState(false);

  // Check the window width and update the isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    // Set the initial state
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={isMobile ? <HomePhone /> : <Home />} />
          <Route path="/apropos" element={isMobile ? <AproposPhone /> : <Apropos />} />
          <Route path="/galerie" element={isMobile ? <GaleriePhone /> : <Galerie />} />
          <Route path="/contact" element={isMobile ? <ContactPhone /> : <Contact />} />
          <Route path="/specialites" element={isMobile ? <SpecialitesPhone /> : <Specialites />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;