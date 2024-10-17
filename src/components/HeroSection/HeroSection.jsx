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
        <div className="swipe-down">
          <div className="swipe-down__gesture">
            <div className="swipe-down__icon"></div>
          </div>
          <p className="swipe-down__title">SWIPE DOWN</p>
        </div>
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
          <button className="hero__footer-section__call-now">
            <span>
              Call Us Now
            </span>
            <div className="hero__footer-section__call-icon">
              <FaPhone style={{ color:'white', transform: 'scaleX(-1)' }} />
            </div>
          </button>
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
            <li className="social-media__item"><FaFacebookF /></li>
            <li className="social-media__item"><FaInstagram /></li>
            <li className="social-media__item"><FaRegEnvelope /></li>
            <li className="social-media__item"><IoLocationOutline /></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;