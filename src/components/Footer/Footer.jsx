import React from 'react';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope';
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import ContactForm from '../Contact/ContactForm';
import ContactCard from '../Contact/ContactCard';
import './Footer.css'

const Footer = ({isFooter = true}) => {
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
      {
          isFooter ? (
            <p className="copyright">
              © SOFTCACTUS, Tous les droits sont réservés, 2024
            </p>
          ) : null
      }
      <ul className="footer-socials">
        <li className="social-media__item footer__media-item">
          <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='https://www.facebook.com/adn.care/' target='_blank'>
            <FaFacebookF />
          </a>
        </li>
        <li className="social-media__item footer__media-item">
          <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='https://www.instagram.com/adn_care/' target='_blank'>
            <FaInstagram />
          </a>
        </li>
        <li className="social-media__item footer__media-item">
          <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='mailto:contact@adncare.com' target='_blank'>
            <FaRegEnvelope />
          </a>
        </li>
        <li className="social-media__item footer__media-item">
          <a style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} href='https://www.google.com/maps/place/ADN+Care+:+Ost%C3%A9opathie,+P%C3%A9rin%C3%A9ologie+%26+Physiokin%C3%A9sith%C3%A9rapie+du+Sport+Pt.+Adnane+Adda/@34.6552916,-1.9187889,17z/data=!3m1!4b1!4m6!3m5!1s0xd787b10b9c54597:0x54cdb1e5c7920200!8m2!3d34.6552872!4d-1.916214!16s%2Fg%2F11fjtv_pdw?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
            <IoLocationOutline />
          </a>
        </li>
      </ul>
      <div className="contact-form">
        <ContactForm />
      </div>
    </section>
  );
};

export default Footer;