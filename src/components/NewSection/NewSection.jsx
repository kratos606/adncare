import React from 'react';

const NewSection = () => {
  return (
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
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;