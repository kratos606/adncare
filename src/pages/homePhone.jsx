import React from 'react'
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import Footer from '../components/Footer/mobile/Footer';
import Navbar from '../components/Navbar/mobile/Navbar';
import './css/homePhone.css'

const HomePhone = () => {  
    return (
      <>
        <section className='background__home-phone'>
          <Navbar />
          <div className="swipe-down swipe-phone">
            <div className="swipe-down__gesture">
            <div className="swipe-down__icon"></div>
            </div>
            <p className="swipe-down__title">SWIPE DOWN</p>
          </div>
          <div className="cta-section__phone">
            <h2 className="cta-section__subtitle__phone">
              Ostéopathie, Périnéologie & Physiokinésithérapie du Sport
            </h2>
            <h1 className="cta-section__main-title__phone">
              Énergie vibrante, santé <br />optimale.
            </h1>
            <div className="cta-section__button-wrapper__phone">
              <button className="cta-section__button__phone">
                <span>
                  BY Pt. Adnane Adda
                </span>
              </button>
            </div> 
          </div>
          <div className="hero__footer-section hero__phone">
            <ul className="hero__footer-section__social-media">
              <li className="social-media__item">
                <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='https://www.facebook.com/adn.care/' target='_blank'>
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-media__item">
                <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='https://www.instagram.com/adn_care/' target='_blank'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
              <button className="hero__footer-section__call-now" style={{transform:'translateY(20px)'}}>
                <span>
                  Call Us Now
                </span>
                <div className="hero__footer-section__call-icon">
                  <FaPhone style={{ color:'white', transform: 'scaleX(-1)' }} />
                </div>
              </button>
            </div>
  
            <ul className="hero__footer-section__social-media">
              <li className="social-media__item">
                <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='mailto:contact@adncare.com' target='_blank'>
                  <FaRegEnvelope />
                </a>
              </li>
              <li className="social-media__item">
                <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='https://www.google.com/maps/place/ADN+Care+:+Ost%C3%A9opathie,+P%C3%A9rin%C3%A9ologie+%26+Physiokin%C3%A9sith%C3%A9rapie+du+Sport+Pt.+Adnane+Adda/@34.6552916,-1.9187889,17z/data=!3m1!4b1!4m6!3m5!1s0xd787b10b9c54597:0x54cdb1e5c7920200!8m2!3d34.6552872!4d-1.916214!16s%2Fg%2F11fjtv_pdw?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
                  <IoLocationOutline />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='welcome__phone' style={{width:'100%',minHeight:'100vh',background:'white',padding:'2rem'}}>
          <div className="title__container__phone">
            <div className="welcome__header__phone">
              <h1 className="welcome__title__phone">Welcome to adn care</h1>
              <div className='welcome__details__phone'>
                Votre expert en ostéopathie, périnéologie, kinésithérapie sportive, performance sportive, neutral trainer, dryneedling 
                et Tecarthérapie.
              </div>
            </div>
          </div>
          <div className="main-back__phone">
            <img src="skills.webp" className='main-back__phone__image' loading='lazy' alt='skills' />
          </div>
          <div className="welcome-cta__section">
            <div className="welcome-cta__section__title welcome-cta__phone">
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
              <button className="welcome-cta__section__call__now">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <Footer showNavbar={false} />
      </>
    );
  }

export default HomePhone