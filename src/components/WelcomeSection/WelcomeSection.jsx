import React from 'react';
import CounterCard from '../CounterCard/CounterCard';
import './WelcomeSection.css'

const WelcomeSection = () => {
  return (
    <section className='welcome__section'>
      <div className="title__container">
        <div className="welcome__header">
          <h1 className="welcome__title">Welcome to adn care</h1>
          <div className='welcome__details'>
            Votre expert en ostéopathie, périnéologie, kinésithérapie sportive, performance sportive, neutral trainer, dryneedling 
            et Tecarthérapie.
          </div>
        </div>
      </div>
      <div className="welcome-main__section">
        <div className="main-back">
          <div className="welcome-cta__background">
            <CounterCard />
          </div>
        </div>
        <div className="welcome-cta__section">
          <div className="welcome-cta__section__title">
            ProHealth - Medical & Healthcare
          </div>
          <div className="welcome-cta__section__details">
            <span className="welcome-cta__section__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu i imperdiet ultricies, leo mauris rhoncus.
            </span>
            <ul className="welcome-cta__section__bullets">
              <li className="welcome-cta__section__item">
                Professional Therapist
              </li>
              <li className="welcome-cta__section__item">
                Satisfaction Guarantee
              </li>
            </ul>
            <button className="welcome-cta__section__call__now" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="title__container">
        <div className="welcome__footer">
          <h1 className="welcome__title">Our Specializations</h1>
          <div className='welcome__details'>
            Votre expert en ostéopathie, périnéologie, kinésithérapie sportive, performance sportive, neutral trainer, dryneedling 
            et Tecarthérapie.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;