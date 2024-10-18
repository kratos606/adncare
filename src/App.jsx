import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Lazy load the pages
const Home = lazy(() => import('./pages/home'));
const Apropos = lazy(() => import('./pages/apropos'));
const Contact = lazy(() => import('./pages/contact'));
const Galerie = lazy(() => import('./pages/galerie'));
const HomePhone = lazy(() => import('./pages/homePhone'))

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
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;