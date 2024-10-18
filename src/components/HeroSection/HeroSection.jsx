import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Importing the phone icon
import { FaFacebookF } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineVerified, MdOutlineAccessTime } from 'react-icons/md';
import { LuCalendarCheck } from 'react-icons/lu';
import { PiPhoneCallFill } from "react-icons/pi";
import Navbar from '../Navbar/Navbar'
import SwipeDown from '../SwipeDown/SwipeDown';
import './HeroSection.css'

const ContactCard = () => {
  return (
    <div className="container">
      <div className="item">
        <div className='contact__icon-container'><PiPhoneCallFill size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Appeler à tout moment</h4>
          <p className="textContent">06 67 78 36 03</p>
          <p className="textContent">06 67 78 36 03</p>
        </div>
      </div>

      <div className="item">
        <div className='contact__icon-container'><FaRegEnvelope size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Envoyer un e-mail</h4>
          <p className="textContent">contact@adncare.com</p>
          <p className="textContent">a.adda@adncare.com</p>
        </div>
      </div>

      <div className="item">
        <div className='contact__icon-container'><FaPhone size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Visitez-nous</h4>
          <p className="textContent">
            Boulevard Mohammed Jelloul, Hay Essaada, N°20, Oujda
          </p>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <Navbar colored={false} />
      <div className='hero__main'>
        <SwipeDown />
        <div className="cta-section">
          <h2 className="cta-section__subtitle">
            Ostéopathie, Périnéologie & Physiokinésithérapie du Sport
          </h2>
          <h1 className="cta-section__main-title">
            Énergie vibrante, santé <br />optimale.
          </h1>
          <div className="cta-section__button-wrapper">
            <button className="cta-section__button">
              <span>
                BY Pt. Adnane Adda
              </span>
            </button>
          </div> 
        </div>
        <div className="hero__footer-section">
          <a style={{textDecoration:'none'}} className="hero__footer-section__call-now" href='tel:+212667783603'>
            <span>
              Call Us Now
            </span>
            <div className="hero__footer-section__call-icon">
              <FaPhone style={{ color:'white', transform: 'scaleX(-1)' }} />
            </div>
          </a>
          <ul className="hero__footer-section__benefits">
            <li className="benefit">
              <div className="benefit__icon"><MdOutlineVerified style={{ fontSize: '1rem' }} /></div>
              <span className="benefit__title">Satisfaction Guarantee</span>
            </li>
            <li className="benefit">
              <div className="benefit__icon"><MdOutlineAccessTime style={{ fontSize: '1rem' }} /></div>
              <span className="benefit__title">24H/06 Availability</span>
            </li>
            <li className="benefit">
              <div className="benefit__icon"><IoLocationOutline style={{ fontSize: '1rem' }} /></div>
              <span className="benefit__title">Local US Professional</span>
            </li>
            <li className="benefit">
              <div className="benefit__icon"><LuCalendarCheck style={{ fontSize: '1rem' }} /></div>
              <span className="benefit__title">Flexible Appointments</span>
            </li>
          </ul>

          <ul className="hero__footer-section__social-media">
            <a style={{all:'unset'}} href='https://www.facebook.com/adn.care/' target='_blank'><li className="social-media__item"><FaFacebookF /></li></a>
            <a style={{all:'unset'}} href='https://www.instagram.com/adn_care/' target='_blank'><li className="social-media__item"><FaInstagram /></li></a>
            <a style={{all:'unset'}} href='mailto:contact@adncare.com' target='_blank'><li className="social-media__item"><FaRegEnvelope /></li></a>
            <a style={{all:'unset'}} href='https://www.google.com/maps/place/ADN+Care+:+Ost%C3%A9opathie,+P%C3%A9rin%C3%A9ologie+%26+Physiokin%C3%A9sith%C3%A9rapie+du+Sport+Pt.+Adnane+Adda/@34.6552916,-1.9187889,17z/data=!3m1!4b1!4m6!3m5!1s0xd787b10b9c54597:0x54cdb1e5c7920200!8m2!3d34.6552872!4d-1.916214!16s%2Fg%2F11fjtv_pdw?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D' target='_blank'><li className="social-media__item"><IoLocationOutline /></li></a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;