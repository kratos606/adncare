import React from 'react';
import './NewSection.css'

const NewSection = () => {
  return (
    <section className='new-section'>
      <div className="bullets__menu-section">
        <div className="bullets__menu-item">
          <button className="bullets__menu__item-button"><p>Tecarthérapie</p></button>
          <button className="bullets__menu__item-button active"><p>Électrothérapie</p></button>
          <button className="bullets__menu__item-button"><p>Ultrasons</p></button>
          <button className="bullets__menu__item-button"><p>Pressothérapie</p></button>
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
            <button className="welcome-cta__section__call__now" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;