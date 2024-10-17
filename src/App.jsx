import './App.css';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Importing the right arrow icon
import { FaPhone } from 'react-icons/fa'; // Importing the phone icon
import { FaFacebookF } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineVerified, MdOutlineAccessTime } from 'react-icons/md';
import { LuCalendarCheck } from 'react-icons/lu';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon from react-icons
import { IoChevronForward } from 'react-icons/io5'; // Import the right arrow icon
import { PiPlayBold } from "react-icons/pi";
import { IoPauseOutline } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        className='contact-input'
        name="name"
        placeholder='Enter Name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        id="phone"
        className='contact-input'
        name="phone"
        placeholder='Phone'
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        id="email"
        className='contact-input'
        name="email"
        placeholder='Enter Email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        name="message"
        className='contact__input-multiline'
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className='send-button'>Envoyer</button>
    </form>
  );
};

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
        <div className='contact__icon-container'><IoIosMail size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Envoyer un e-mail</h4>
          <p className="textContent">contact@adncare.com</p>
          <p className="textContent">a.adda@adncare.com</p>
        </div>
      </div>

      <div className="item">
        <div className='contact__icon-container'><FaLocationDot size={30} color="#FFFFFF" /></div>
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

const CounterCard = () => {
  const data = [
    { count: 27, label: 'Skilled Therapist' },
    { count: 41, label: 'Solved Cases' },
    { count: 172, label: 'Happy Patients' },
  ];

  return (
    <div className="counter-card">
      {data.map((item, index) => (
        <div key={index} className="counter-item">
          <div className="counter-icon">&#9658;</div>
          <div className="counter-content">
            <div className="counter-number">{item.count}</div>
            <div className="counter-label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
    <section className='hero-section'>
      <nav className='navbar'>
        <div className="navbar__logo">
          <img src={'/logo.svg'} alt='logo' />
        </div>
        <div className="navbar__menu-container">
          <ul className="navbar__menu">
            <li className='navbar__menu-item navbar__menu-item--active'>Accueil</li>
            <li className='navbar__menu-item'>À-propos</li>
            <li className='navbar__menu-item'>Spécialités</li>
            <li className='navbar__menu-item'>Blog</li>
            <li className='navbar__menu-item'>Galerie</li>
          </ul>
        </div>
        <div className="navbar__contact-button">
          Contact <AiOutlineArrowRight className='navbar__contact-icon' /> {/* Using the arrow icon */}
        </div>
      </nav>
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
        <div className="welcome-cta__background">
          <CounterCard />
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
                Professional Threrapist
              </li>
              <li className="welcome-cta__section__item">
                Satisfaction Gurantee
              </li>
            </ul>
            <button className="welcome-cta__section__call__now">
              contact us
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
    <section className="bullets">
      <div className="bullets__item">
        <div className="bullets__item-number">
          <span>01</span>
        </div>
        <h3 className="bullets__item-title">OSTÉOPATHIE</h3>
        <div className="bullets__item-arrow">
          <IoArrowForward style={{fontSize:'2rem'}} />
        </div>
        <p className="bullets__item-description">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentes Convallis, Augue Uttytu I Imperdiet.
        </p>
        <div className="bullets__item__read-more">
          <IoChevronForward style={{fontSize:'2rem',color:'#FFA800'}} />
        </div>  
      </div>
      <div className="bullets__item">
        <div className="bullets__item-number">
          <span>02</span>
        </div>
        <h3 className="bullets__item-title">Périnéologie</h3>
        <div className="bullets__item-arrow">
          <IoArrowForward style={{fontSize:'2rem'}} />
        </div>
        <p className="bullets__item-description">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentes Convallis, Augue Uttytu I Imperdiet.
        </p>
        <div className="bullets__item__read-more">
          <IoChevronForward style={{fontSize:'2rem',color:'#FFA800'}} />
        </div>  
      </div>
      <div className="bullets__item">
        <div className="bullets__item-number">
          <span>03</span>
        </div>
        <h3 className="bullets__item-title">Physiokinésithérapie</h3>
        <div className="bullets__item-arrow">
          <IoArrowForward style={{fontSize:'2rem'}} />
        </div>
        <p className="bullets__item-description">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentes Convallis, Augue Uttytu I Imperdiet.
        </p>
        <div className="bullets__item__read-more">
          <IoChevronForward style={{fontSize:'2rem',color:'#FFA800'}} />
        </div>  
      </div>
    </section>
    <section className='new-section'>
      <div className="bullets__menu-section">
        <div className="bullets__menu-item">
          <button className="bullets__menu__item-button">Pressothérapie</button>
          <button className="bullets__menu__item-button">Tecarthérapie</button>
          <button className="bullets__menu__item-button">Electrothérapie</button>
          <button className="bullets__menu__item-button">Ultrasons</button>
        </div>
        <div className="bullets__menu-item bullets__menu__item__picture-viewer">
          <img src={'/product.svg'} alt={'product'} loading="lazy" />
        </div>
        <div className="bullets__menu-item">
          <div className="welcome-cta__section__title">
            ProHealth - Medical & Healthcare
          </div>
          <div className="welcome-cta__section__details">
            <span className="welcome-cta__section__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu i imperdiet ultricies, leo mauris rhoncus.
            </span>
            <button className="welcome-cta__section__call__now">
              contact us
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className='experiences'>
      <div className="title__container">
        <div className="welcome__header">
          <h1 className="welcome__title">Patient Experniences</h1>
          <div className='welcome__details'>
            Votre expert en ostéopathie, périnéologie, kinésithérapie sportive, performance sportive, neutral trainer, dryneedling 
            et Tecarthérapie.
          </div>
        </div>
      </div>
      <div className="experiences__video-slider">
        <div className="video-item" style={{ '--i': `url('/Rectangle 881.png')` }}>
          <div className="video__item-details">
            <div className="player-ui">
              <div className="video__item-title">Lorem ipsum</div>
              <div className="video__item-description">Lorem ipsum dolor</div>
            </div>
            <button className="play-button"><PiPlayBold style={{color:'white',fontSize:'1.5rem'}} /></button>
          </div>
        </div>
        <div className="video-item" style={{ '--i': `url('/Rectangle 882.png')` }}>
          <div className="video__item-details">
            <div className="player-ui">
              <div className="video__item-title">Lorem ipsum</div>
              <div className="video__item-description">Lorem ipsum dolor</div>
            </div>
            <button className="play-button"><IoPauseOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
          </div>
        </div>
        <div className="video-item" style={{ '--i': `url('/Rectangle 883.png')` }}>
          <div className="video__item-details">
            <div className="player-ui">
              <div className="video__item-title">Lorem ipsum</div>
              <div className="video__item-description">Lorem ipsum dolor</div>
            </div>
            <button className="play-button"><PiPlayBold style={{color:'white',fontSize:'1.5rem'}} /></button>
          </div>
        </div>
      </div>
      <div className="galerie">
          <div className="galerie-item galerie-main">
            <div className="galerie__image-item">
              <img className='galerie-image' src='/Rectangle 887.png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (4).png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (5).png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (6).png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/Rectangle 890.png' loading="lazy" />
            </div>
          </div>
          <div className="galerie-item galerie-second">
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (9).png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (1).png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (2).png' loading="lazy" />
            </div>
            <div className="galerie__image-item">
              <img className='galerie-image' src='/images (3).png' loading="lazy" />
            </div>
          </div>
        </div>
    </section>
    <section className="ready">
      <div className="ready-container">
        <h1 className='ready-title'>
          <IoArrowForward style={{color:'#FFA800'}}/> Ready to begin your journey
        </h1>
      </div>
      <div className="ready-panel">
        <div className="ready__panel-background">
          <img src={'/RRT-1.webp'} loading="lazy"/>
        </div>
        <div className="ready__panel-description">
          <div className="ready__panel__description-logo">
            <img src="med.svg" loading="lazy" />
          </div>
          <div className="ready__panel__description-main">
            <h1>Book Appointements</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu
            </p>
            <button className="book__us-now">LETS BOOK</button>
          </div>
        </div>
      </div>
      <div className="back__cta">
        <FaArrowUpLong style={{fontSize:'2rem'}} />
      </div>
    </section>
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
    </>
  );
}

export default App;