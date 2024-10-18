import React from 'react';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon from react-icons
import { FaArrowUpLong } from "react-icons/fa6";
import './ReadySection.css'
import { useLocation, useNavigate } from 'react-router-dom';

const ReadySection = () => {
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
        <FaArrowUpLong style={{fontSize:'2rem'}} />
      </div>
    </section>
  );
};

export default ReadySection;