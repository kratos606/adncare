import React from 'react';
import Navbar from '../components/Navbar/mobile/Navbar';
import Footer from '../components/Footer/mobile/Footer';
import Features from '../components/Features/Features';
import "./css/specialitesPhone.css"

// Sub-component for the Swipe Down section
const SwipeDown = () => {
  return (
    <div className="swipe-down swipe-phone swipe-down-gold">
      <div className="swipe-down__gesture">
        <div className="swipe-down__icon"></div>
      </div>
      <p className="swipe-down__title">SWIPE DOWN</p>
    </div>
  );
};

const WhyUsSection = () => {
    return (
      <section className="why-us sp-why__us phone__wh">
        <WhyUsMenu />
      </section>
    );
  };

  const WhyUsMenu = () => {
    return (
      <div className="centered">
        <div className="why__us-menu sp-why__us">
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <img src="/special.svg" alt="Why Us" loading='lazy' />
        </div>
        <div>
          <div className="why__us__section sp-why__us">
            <div className="why__us__section__title sp-why__us">
                Physiokinetherapie
            </div>
            <div className="why__us__section__details">
              <div className="why__us__section__text sp-why__us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu.
              </div>
              <div className="why__us__section__text sp-why__us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue.              
                </div>
                <button className="welcome-cta__section__call__now" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              Contact Us
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

// Sub-component for the Title Container
const TitleContainer = ({ title }) => {
  return (
    <div style={{ width: '100%' }}>
      <div className="title__container__phone">
        <div className="welcome__header__phone">
          <h1 className="welcome__title__phone">{title}</h1>
        </div>
      </div>
    </div>
  );
};

// Main SpecialitesPhone component
const SpecialitesPhone = () => {
  return (
    <>
      <section className='apropos__phone'>
        <Navbar black={true} />
        <SwipeDown />
        <TitleContainer title="Nos Spécialités" />
        <div className="button-container__flex">
            <button className='button-item __phone'>
                Ostéopathie
            </button>
            <button className='button-item __phone'>
                Physiokinésithérapie
            </button>
            <button className='button-item __phone'>
                Périnéologie
            </button>
        </div>
        <div className="centered">
                <p className='description__specialites'>
                    Votre expert en ostéopathie, périnéologie, kinésithérapie sportive, performance sportive, neutral trainer, dryneedling 
                    et Tecarthérapie.
                </p>
            </div>
      </section>
      <WhyUsSection />
      <Footer showNavbar={false} />
    </>
  );
};

export default SpecialitesPhone;