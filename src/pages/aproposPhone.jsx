import React from 'react';
import Navbar from '../components/Navbar/mobile/Navbar';
import Footer from '../components/Footer/mobile/Footer';
import Features from '../components/Features/Features';
import './css/aproposPhone.css';

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

// Sub-component for the Grid Item
const GridItem = () => {
  return (
    <div className="grid-item" style={{ padding: '1.5rem' }}>
      <h1 className='grid__item-text header'>Adn Care</h1>
      <h2 className='grid__item-text sub-header'>Énergie vibrante, santé optimale.</h2>
      <p className='grid__item-text description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies.
      </p>
      <div className="grid__item-card">
        <div className="card-id"></div>
        <div className="card-info">
          <span>BY</span> Pt. <br />
          Adnane Adda
        </div>
      </div>
    </div>
  );
};

// Sub-component for the Why Us Menu
const WhyUsMenu = () => {
  return (
    <div className="why__us-menu__phone">
      <img src="/5e7996ff75142dfda98484a79ff366b8_2_25.webp" alt="Why Us" />
      <div>
        <div className="why__us__section__phone">
          <div className="why__us__section__title__phone">
            We Proudly Give Quality Treatments 
          </div>
          <div className="why__us__section__details__phone">
            <span className="why__us__section__text__phone">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu.
            </span>
            <ul className="why__us__section__bullets__phone">
              <li className="why__us__section__item__phone">
                Advance Manual Therapy<br/>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.
                </span>
              </li>
              <li className="why__us__section__item__phone">
                Certified Personal Therapist<br/>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main AproposPhone component
const AproposPhone = () => {
  return (
    <>
      <section className='apropos__phone'>
        <Navbar black={true} />
        <SwipeDown />
        <TitleContainer title="À propos de nous" />
        <div style={{position:'relative',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img src='/bc8159e88e6f6e20702363edb7e8bbcf.png' alt="Apropos" loading='lazy' />
          <div className="gradient__layer" style={{width:'90%'}}>
            <p>13+ <br />
            Years of Experience</p>
          </div>
        </div>
        <GridItem />
        <TitleContainer title="Pourquoi Nous Choisir" />
        <Features />
        <WhyUsMenu />
      </section>
      <Footer showNavbar={false} />
    </>
  );
};

export default AproposPhone;