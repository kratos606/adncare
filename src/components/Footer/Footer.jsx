import React from 'react';
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from '../Contact/ContactForm';
import ContactCard from '../Contact/ContactCard';

const Footer = () => {
  return (
    <section className="footer-section">
      <h1 className='footer__section-title'>
        Parlez-nous de vous
      </h1>
      <div className="join-us">
        <h1 className='join__us-title'>
          POUR NOUS JOINDRE 
        </h1>
        <ContactCard />
      </div>
      <p className="copyright">
        © SOFTCACTUS, Tous les droits sont réservés, 2024
      </p>
      <ul className="footer-socials">
        <li className="social-media__item footer__media-item"><FaFacebookF /></li>
        <li className="social-media__item footer__media-item"><FaInstagram /></li>
        <li className="social-media__item footer__media-item"><FaRegEnvelope /></li>
        <li className="social-media__item footer__media-item"><IoLocationOutline /></li>
      </ul>
      <div className="contact-form">
        <ContactForm />
      </div>
    </section>
  );
};

export default Footer;