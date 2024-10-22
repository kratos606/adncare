import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ReadySection from '../components/ReadySection/ReadySection';
import Footer from '../components/Footer/Footer';
import SwipeDown from '../components/SwipeDown/SwipeDown';
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import Features from '../components/Features/Features';
import './css/apropos.css';

const Apropos = () => {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ReadySection />
      <Footer />
    </>
  );
};

export default Apropos;

/* ------------------- Sub-Components Below ------------------- */

/**
 * HeroSection Component
 * Handles the hero section including Navbar, SwipeDown, and the title.
 */
const HeroSection = () => {
  return (
    <section className='apropos__hero-section'>
      <Navbar colored={true} />
      <SwipeDown gold={true} />
      <div className="title__container">
        <div className="welcome__footer">
          <h1 className="welcome__title">dédiés à l'amélioration de votre santé et de votre bien-être.</h1>
        </div>
      </div>
      <AproposGrid />
    </section>
  );
};

/**
 * AproposGrid Component
 * Manages the grid layout by incorporating CheckList, ImageSection, and TextSection.
 */
const AproposGrid = () => {
  return (
    <div className="grid-container">
      <CheckList />
      <ImageSection />
      <TextSection />
    </div>
  );
};

/**
 * CheckList Component
 * Displays the checklist with icons and the video player grid.
 */
const CheckList = () => {
  const checkItems = [
    '100% satisfaction',
    'Expert team member',
    'Modern technology'
  ];

  return (
    <div className="grid-item">
      <ul className="check__list">
        {checkItems.map((item, index) => (
          <li key={index} className="check__list-item">
            <IoMdCheckmarkCircleOutline className='check__list-item__icon' />
            {item}
          </li>
        ))}
        <VideoPlayer />
      </ul>
    </div>
  );
};

/**
 * VideoPlayer Component
 * Displays the video thumbnail with overlay and play button.
 */
const VideoPlayer = () => {
  return (
    <li className="video__player-grid">
      <img
        className='video__player-grid-image'
        src="/Rectangle 887.png"
        alt="Video Thumbnail"
        loading='lazy'
      />
      <div className="video__player-grid-overlay"></div>
      <div className="apropos-play__button">
        <FaPlay className='apropos-play__button-icon' />
      </div>
    </li>
  );
};

/**
 * ImageSection Component
 * Displays the main image within the grid.
 */
const ImageSection = () => {
  return (
    <div className="grid-item">
      <div className="grid__item-image">
        <img src='/bc8159e88e6f6e20702363edb7e8bbcf.png' alt="Apropos" loading='lazy' />
        <div className="gradient__layer">
          <p>13+ <br />
          Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

/**
 * TextSection Component
 * Contains textual content and card information.
 */
const TextSection = () => {
  return (
    <div className="grid-item">
      <h1 className='grid__item-text header'>Adn Care</h1>
      <h2 className='grid__item-text sub-header'>Énergie vibrante, santé optimale.</h2>
      <p className='grid__item-text description'>
        Notre centre de kinésithérapie sportive allie une expertise de pointe avec les meilleures technologies pour vous offrir des soins personnalisés et efficaces.
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

/**
 * WhyUsSection Component
 * Handles the "Why Us" section including the title, Features, and WhyUsMenu.
 */
const WhyUsSection = () => {
  return (
    <section className="why-us">
      <div className="title__container">
        <div className="welcome__footer">
          <h1 className="welcome__title">Pourquoi Nous Choisir</h1>
        </div>
      </div>
      <Features />
      <WhyUsMenu />
    </section>
  );
};

/**
 * WhyUsMenu Component
 * Displays the menu within the "Why Us" section.
 */
const WhyUsMenu = () => {
  return (
    <div className="why__us-menu">
      <img src="/5e7996ff75142dfda98484a79ff366b8.webp" alt="Why Us" loading='lazy' />
      <div>
        <div className="why__us__section">
          <div className="why__us__section__title">
            Nous sommes fiers de notre expertise de qualité
          </div>
          <div className="why__us__section__details">
            <span className="why__us__section__text">
              Notre équipe d'experts s'engage à vous fournir des soins de la plus haute qualité, en alliant compétence et passion. Nous mettons un point d'honneur à rester à jour avec les avancés dans le domaine de la kinésithérapie et de la réadaptation pour vous offrir les meilleurs services possibles.
            </span>
            <ul className="why__us__section__bullets">
              <li className="why__us__section__item">
                Advance Manual Therapy<br />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.
                </span>
              </li>
              <li className="why__us__section__item">
                Certified Personal Therapist<br />
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