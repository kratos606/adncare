import React from 'react';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward'; // Import the arrow icon from react-icons
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import './ReadySection.css'
import { useLocation, useNavigate } from 'react-router-dom';

const ReadySection = ({isFooter = false}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === '/') {
      // If the current URL is '/', scroll to the bottom of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, navigate to '/'
      navigate('/');
    }
  };
  return (
    <section className="ready">
      <div className="ready-container">
        <h1 className='ready-title'>
          <IoArrowForward style={{color:'#FFA800'}}/> Ready to begin your journey
        </h1>
      </div>
      <div className="ready-panel">
        <div className="ready__panel-background">
          <img src={'/RRT-1.webp'} alt="Background" loading="lazy"/>
        </div>
        <div className="ready__panel-description">
          <div className="ready__panel__description-logo">
            <img src="med.svg" alt="Logo" loading="lazy" />
          </div>
          <div className="ready__panel__description-main">
            <h1>Book Appointments</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu
            </p>
            <button className="book__us-now">LETS BOOK</button>
          </div>
        </div>
      </div>
      <div className="back__cta" onClick={() => handleClick()}>
        <FaArrowUp style={{fontSize:'2rem'}} />
      </div>
      {
        isFooter ? (
          <p className="copyright" style={{color:'#4E4E4E'}}>
            © SOFTCACTUS, Tous les droits sont réservés, 2024
          </p>
        ) : null
      }
    </section>
  );
};

export default ReadySection;