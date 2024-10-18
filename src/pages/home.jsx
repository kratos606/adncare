import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import BulletsSection from '../components/BulletsSection/BulletsSection';
import NewSection from '../components/NewSection/NewSection';
import Experiences from '../components/Experiences/Experiences';
import ReadySection from '../components/ReadySection/ReadySection';
import Footer from '../components/Footer/Footer';
import './css/home.css'


function Home() {

  return (    
    <>
      <HeroSection />
      <WelcomeSection />
      <BulletsSection />
      <NewSection />
      <Experiences />
      <ReadySection />
      <Footer />
    </>  
  );
}

export default Home;