import React from 'react';
import Navbar from '../components/Navbar/mobile/Navbar';
import Footer from '../components/Footer/mobile/Footer';
import './css/galeriePhone.css';
import { IoPauseOutline } from '@react-icons/all-files/io5/IoPauseOutline';
import { IoPlayOutline } from '@react-icons/all-files/io5/IoPlayOutline';

/**
 * GaleriePhone Component
 * Main component that assembles all sub-components to render the mobile gallery page.
 */
const GaleriePhone = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <Footer showNavbar={false} />
    </>
  );
};

export default GaleriePhone;

/* ------------------- Sub-Components Below ------------------- */

/**
 * HeroSection Component
 * Handles the hero section including Navbar, SwipeDown indicator, titles, details, and GridGallery.
 */
const HeroSection = () => {
  return (
    <section className='apropos__phone'>
      <Navbar black={true} />
      <SwipeDown />
      <TitleContainer />
      <GridGallery />
      <TitleContainer />
    </section>
  );
};

/**
 * SwipeDown Component
 * Displays the swipe down indicator.
 */
const SwipeDown = () => {
  return (
    <div className="swipe-down swipe-phone swipe-down-gold">
      <div className="swipe-down__gesture">
        <div className="swipe-down__icon"></div>
      </div>
      <p className="swipe-down__title">SWIPE DOWN</p>
    </div>
  );
};

/**
 * TitleContainer Component
 * Displays the title and descriptive details.
 * Reused twice for consistency.
 */
const TitleContainer = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className="title__container__phone">
        <div className="welcome__header__phone">
          <h1 className="welcome__title__phone">Meet our beautiful team</h1>
          <p className="welcome__details__phone">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * GridGallery Component
 * Displays a grid of gallery images.
 */
const GridGallery = () => {
  const images = [
    { src: "/images (2).webp", alt: "Image 1", className: "item1" },
    { src: "/Rectangle 887.png", alt: "Image 2", className: "item2" },
    { src: "/Rectangle 882.png", alt: "Image 3", className: "item3" },
    { src: "/Rectangle 883.png", alt: "Image 4", className: "item4" },
    { src: "/ac3625ffa735356d712b632ed21ca280.webp", alt: "Image 5", className: "item5" },
    { src: "/f47e0ef7ad313f9913fe551f8f018af4.webp", alt: "Image 6", className: "item6" },
  ];

  return (
    <div className="galerie__grid-container">
      {images.map((image, index) => (
        <div key={index} className={`galerie__grid-item ${image.className}`}>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

/**
 * VideoSection Component
 * Handles the video gallery section.
 */
const VideoSection = () => {
  const videos = [
    {
      backgroundImage: "/54446b38ffbae45bc8befa57ac084639.webp",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: false,
    },
    {
      backgroundImage: "/8671a1abb8d0e729edaeef2a1075f9b4.webp",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: true,
    },
    {
      backgroundImage: "/images (8).png",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: false,
    },
    {
      backgroundImage: "/Rectangle 882.png",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: false,
    },
  ];

  return (
    <div
      className='video__galerie__grid-container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        marginBlock: '4rem'
      }}
    >
      {videos.map((video, index) => (
        <VideoItemPhone
          key={index}
          backgroundImage={video.backgroundImage}
          title={video.title}
          description={video.description}
          isPlaying={video.isPlaying}
        />
      ))}
    </div>
  );
};

/**
 * VideoItemPhone Component
 * Represents a single video item with background image, details, and play/pause button.
 */
const VideoItemPhone = ({ backgroundImage, title, description, isPlaying }) => {
  const buttonIcon = isPlaying ? (
    <IoPauseOutline style={{ color: 'white', fontSize: '1.5rem' }} />
  ) : (
    <IoPlayOutline style={{ color: 'white', fontSize: '1.5rem' }} />
  );

  const videoItemStyle = {
    '--i': `url('${backgroundImage}')`,
    transform: 'none',
    width: '80%',
    height: 'none',
    aspectRatio: '9 / 16',
  };

  return (
    <div className="video-item__phone" style={videoItemStyle}>
      <div className="video__item-details">
        <div className="player-ui">
          <div className="video__item-title">{title}</div>
          <div className="video__item-description">{description}</div>
        </div>
        <button className="play-button">{buttonIcon}</button>
      </div>
    </div>
  );
};