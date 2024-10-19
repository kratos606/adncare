import React from 'react';
import Navbar from '../components/Navbar/mobile/Navbar';
import Footer from '../components/Footer/mobile/Footer';
import './css/homePhone.css';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaRegEnvelope } from '@react-icons/all-files/fa/FaRegEnvelope';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";

/**
 * HomePhone Component
 * Main component that assembles all sub-components to render the mobile home page.
 */
const HomePhone = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <Footer showNavbar={false} />
    </>
  );
};

export default HomePhone;

/* ------------------- Sub-Components Below ------------------- */

/**
 * HeroSection Component
 * Handles the hero section including Navbar, SwipeDown indicator, CTA, and hero footer.
 */
const HeroSection = () => {
  return (
    <section className='background__home-phone'>
      <Navbar />
      <SwipeDown />
      <CTASection />
      <HeroFooter />
    </section>
  );
};

/**
 * SwipeDown Component
 * Displays the swipe down indicator.
 */
const SwipeDown = () => {
  return (
    <div className="swipe-down swipe-phone">
      <div className="swipe-down__gesture">
        <div className="swipe-down__icon"></div>
      </div>
      <p className="swipe-down__title">SWIPE DOWN</p>
    </div>
  );
};

/**
 * CTASection Component
 * Contains the Call-To-Action (CTA) section with subtitles, main title, and a button.
 */
const CTASection = () => {
  return (
    <div className="cta-section__phone">
      <h2 className="cta-section__subtitle__phone">
        Ostéopathie, Périnéologie & Physiokinésithérapie du Sport
      </h2>
      <h1 className="cta-section__main-title__phone">
        Énergie vibrante, santé <br />optimale.
      </h1>
      <div className="cta-section__button-wrapper__phone">
        <button className="cta-section__button__phone">
          <span>BY Pt. Adnane Adda</span>
        </button>
      </div>
    </div>
  );
};

/**
 * HeroFooter Component
 * Contains social media links, call button, and additional contact icons.
 */
const HeroFooter = () => {
  const socialMediaLinks = [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/adn.care/',
      label: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/adn_care/',
      label: 'Instagram',
    },
    {
      icon: <FaRegEnvelope />,
      href: 'mailto:contact@adncare.com',
      label: 'Email',
    },
    {
      icon: <IoLocationOutline />,
      href: 'https://www.google.com/maps/place/ADN+Care+:+Ost%C3%A9opathie,+P%C3%A9rin%C3%A9ologie+%26+Physiokin%C3%A9sith%C3%A9rapie+du+Sport+Pt.+Adnane+Adda/@34.6552916,-1.9187889,17z/data=!3m1!4b1!4m6!3m5!1s0xd787b10b9c54597:0x54cdb1e5c7920200!8m2!3d34.6552872!4d-1.916214!16s%2Fg%2F11fjtv_pdw?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D',
      label: 'Location',
    },
  ];

  return (
    <div className="hero__footer-section hero__phone">
      {/* Social Media Icons */}
      <ul className="hero__footer-section__social-media">
        {socialMediaLinks.slice(0, 2).map((link, index) => (
          <li key={index} className="social-media__item">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-media__link"
              style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      {/* Call Now Button */}
      <div className="call-now-container">
          <a style={{textDecoration:'none',transform:'translateY(20px)'}} className="hero__footer-section__call-now" href='tel:+212667783603'>
            <span>
              Call Us Now
            </span>
            <div className="hero__footer-section__call-icon">
              <FaPhone style={{ color:'white', transform: 'scaleX(-1)' }} />
            </div>
          </a>
      </div>

      {/* Additional Social Media Icons */}
      <ul className="hero__footer-section__social-media">
        {socialMediaLinks.slice(2).map((link, index) => (
          <li key={index} className="social-media__item">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-media__link"
              style={{all: 'unset',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * WelcomeSection Component
 * Handles the welcome section with titles, images, and call-to-action buttons.
 */
const WelcomeSection = () => {
  return (
    <section
      className='welcome__phone'
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'white',
        padding: '2rem',
      }}
    >
      <TitleContainerWelcome />
      <MainBack />
      <WelcomeCTASection />
    </section>
  );
};

/**
 * TitleContainerWelcome Component
 * Displays the welcome title and descriptive text.
 */
const TitleContainerWelcome = () => {
  return (
    <div className="title__container__phone">
      <div className="welcome__header__phone">
        <h1 className="welcome__title__phone">Welcome to ADN Care</h1>
        <div className='welcome__details__phone'>
          Votre expert en ostéopathie, périnéologie, kinésithérapie sportive,
          performance sportive, neutral trainer, dry needling et Tecarthérapie.
        </div>
      </div>
    </div>
  );
};

/**
 * MainBack Component
 * Displays the main background image.
 */
const MainBack = () => {
  return (
    <div className="main-back__phone">
      <img
        src="skills.webp"
        className='main-back__phone__image'
        loading='lazy'
        alt='Skills Illustration'
      />
    </div>
  );
};

/**
 * WelcomeCTASection Component
 * Contains additional titles, descriptive text, bullet points, and a contact button.
 */
const WelcomeCTASection = () => {
  return (
    <div className="welcome-cta__section">
      <div className="welcome-cta__section__title welcome-cta__phone">
        ProHealth - Medical & Healthcare
      </div>
      <div className="welcome-cta__section__details">
        <span className="welcome-cta__section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus
          uttytu i imperdiet ultricies, leo mauris rhoncus.
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
  );
};