import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ReadySection from '../components/ReadySection/ReadySection'
import Footer from '../components/Footer/Footer'
import SwipeDown from '../components/SwipeDown/SwipeDown'
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import './css/apropos.css'

const Features = () => {
  const features = [
    { id: '01', title: '100% Satisfaction', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'orange' },
    { id: '02', title: 'Expert Team', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'blue' },
    { id: '03', title: 'Modern Technology', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'orange' },
    { id: '04', title: 'Flexible Pricing', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'blue' },
  ];

  return (
    <div className="features-container">
      {features.map((feature) => (
        <div className="feature" key={feature.id}>
          <div className={`circle ${feature.color}`}>
            <span>{feature.id}</span>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

const Apropos = () => {
  return (
    <>
        <section className='apropos__hero-section'>
        <Navbar colored={true} />
        <SwipeDown gold={true} />
        <div className="title__container">
            <div className="welcome__footer">
            <h1 className="welcome__title">à propos de nous</h1>
            </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <ul className="check__list">
              <li className="check__list-item"><IoMdCheckmarkCircleOutline className='check__list-item__icon' />100% satisfaction</li>
              <li className="check__list-item"><IoMdCheckmarkCircleOutline className='check__list-item__icon' />Epert team meamber</li>
              <li className="check__list-item"><IoMdCheckmarkCircleOutline className='check__list-item__icon' />modern technology</li>
              <li className="video__player-grid">
                <img className='video__player-grid-image' src="/Rectangle 887.png" loading='lazy' />
                <div className="video__player-grid-overlay"></div>
                <div className="apropos-play__button"><FaPlay className='apropos-play__button-icon' /></div>
              </li>
            </ul>
          </div>
          <div className="grid-item">
            <div className="grid__item-image">
              <img src='/bc8159e88e6f6e20702363edb7e8bbcf.png' />
            </div>
          </div>
          <div className="grid-item">
            <h1 className='grid__item-text header'>Adn Care</h1>
            <h2 className='grid__item-text sub-header'>Énergie vibrante, santé optimale.</h2>
            <p className='grid__item-text description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies.</p>
            <div className="grid__item-card">
              <div className="card-id"></div>
              <div className="card-info">
                <span>BY</span> Pt. <br />
                Adnane Adda
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="why-us">
          <div className="title__container">
              <div className="welcome__footer">
              <h1 className="welcome__title">Pourquoi Nous Choisir</h1>
              </div>
          </div>
          <Features />
          <div className="why__us-menu">
            <img src="/5e7996ff75142dfda98484a79ff366b8.webp" />
            <div>
              <div className="why__us__section">
                <div className="why__us__section__title">
                  We Proudly Give Quality Treatments 
                </div>
                <div className="why__us__section__details">
                  <span className="why__us__section__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu.
                  </span>
                  <ul className="why__us__section__bullets">
                    <li className="why__us__section__item">
                      Advance Manual Therapy<br/>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.
                      </span>
                    </li>
                    <li className="why__us__section__item">
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
        </section>
        <ReadySection />
        <Footer />
    </>
  )
}

export default Apropos