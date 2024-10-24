import React from 'react';
import { IoPlayOutline } from "@react-icons/all-files/io5/IoPlayOutline"
import { IoPauseOutline } from "@react-icons/all-files/io5/IoPauseOutline"
import './Experiences.css'

const Experiences = () => {
  return (
    <section className='experiences'>
      <div className="title__container">
        <div className="welcome__header">
          <h1 className="welcome__title">Nos patients témoignent</h1>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className='welcome__details'>
            Votre expert en ostéopathie, périnéologie, kinésithérapie sportive, performance sportive, neutral trainer, dryneedling 
            et Tecarthérapie.
      </div>
      </div>
      <div className="experiences__video-slider">
      <div className="experiences__video-slider">
        <div className="video-item" style={{ '--i': `url('/Rectangle 881.png')` }}>
          <div className="video__item-details">
            <div className="player-ui">
              <div className="video__item-title">Lorem ipsum</div>
              <div className="video__item-description">Lorem ipsum dolor</div>
            </div>
            <button className="play-button"><IoPlayOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
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
            <button className="play-button"><IoPlayOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
          </div>
        </div>
      </div>
      </div>
      <div className="galerie_a">
        <div className="galerie-item_a galerie-main_a">
          <div className="image-slider_a">
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/Rectangle 887.png' alt="Gallery 1" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (4).png' alt="Gallery 2" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (5).png' alt="Gallery 3" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (6).png' alt="Gallery 4" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/Rectangle 890.png' alt="Gallery 5" loading="lazy" />
            </div>
          </div>
          <div className="image-slider_a">
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/Rectangle 887.png' alt="Gallery 1" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (4).png' alt="Gallery 2" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (5).png' alt="Gallery 3" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (6).png' alt="Gallery 4" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/Rectangle 890.png' alt="Gallery 5" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="galerie-item_a galerie-second_a">
          <div className="image-slider_a">
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (9).png' alt="Gallery 1" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (1).png' alt="Gallery 2" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (2).webp' alt="Gallery 3" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (3).png' alt="Gallery 4" loading="lazy" />
            </div>
          </div>
          <div className="image-slider_a">
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (9).png' alt="Gallery 1" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (1).png' alt="Gallery 2" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (2).webp' alt="Gallery 3" loading="lazy" />
            </div>
            <div className="galerie__image-item_a">
              <img className='galerie-image_a' src='/images (3).png' alt="Gallery 4" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;