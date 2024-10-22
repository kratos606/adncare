import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ReadySection from '../components/ReadySection/ReadySection'
import Footer from '../components/Footer/Footer'
import SwipeDown from '../components/SwipeDown/SwipeDown'
import "./css/specialites.css"

const WhyUsSection = () => {
    return (
      <section className="why-us sp-why__us">
        <WhyUsMenu />
      </section>
    );
  };

  const WhyUsMenu = () => {
    return (
      <div className="centered">
        <div className="why__us-menu sp-why__us">
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
            <img src="/special.svg" alt="Why Us" loading='lazy' />
        </div>
        <div>
          <div className="why__us__section sp-why__us">
            <div className="why__us__section__title sp-why__us">
                Physiokinetherapie
            </div>
            <div className="why__us__section__details">
              <span className="why__us__section__text sp-why__us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu.
              </span>
              <span className="why__us__section__text sp-why__us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue.              
                </span>
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

const Specialites = () => {
  return (
    <>
        <section className='Specialites__hero-section'>
            <Navbar colored={true} />
            <SwipeDown gold={true}/>
            <div className="title__container">
                <div className="welcome__footer">
                <h1 className="welcome__title">Nos Spécialités</h1>
                </div>
            </div>
            <div className="button-container__flex">
                <button className='button-item'>
                    Ostéopathie
                </button>
                <button className='button-item'>
                    Physiokinésithérapie
                </button>
                <button className='button-item'>
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
        <ReadySection isFooter={false} />
        <Footer isFooter={true} />
    </>
  )
}

export default Specialites