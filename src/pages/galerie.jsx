import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ReadySection from '../components/ReadySection/ReadySection';
import Footer from '../components/Footer/Footer';
import SwipeDown from '../components/SwipeDown/SwipeDown';
import { IoPlayOutline } from "@react-icons/all-files/io5/IoPlayOutline";
import { IoPauseOutline } from "@react-icons/all-files/io5/IoPauseOutline";
import './css/galerie.css';

/**
 * Galerie Component
 * Main component that assembles all sub-components to render the gallery page.
 */
const Galerie = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ReadySection />
      <Footer />
    </>
  );
};

export default Galerie;

/* ------------------- Sub-Components Below ------------------- */

/**
 * HeroSection Component
 * Handles the hero section including Navbar, SwipeDown, titles, details, and GridGallery.
 */
const HeroSection = () => {
  return (
    <section className='Galerie__hero-section'>
      <Navbar colored={true} />
      <SwipeDown gold={true} />
      <div className="title__container">
        <div className="welcome__header">
          <h1 className="welcome__title">Meet our beautiful team</h1>
        </div>
      </div>
      <div className='galerie__details'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <GridGallery />
      <div className="title__container">
        <div className="welcome__header">
          <h1 className="welcome__title">Meet our beautiful team</h1>
        </div>
      </div>
      <div className='galerie__details'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
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
  return (
    <section className='video-section'>
      <VideoGallery />
    </section>
  );
};

/**
 * VideoGallery Component
 * Displays a grid of video items with play/pause buttons.
 */
const VideoGallery = () => {
  const videos = [
    {
      backgroundImage: "url('/54446b38ffbae45bc8befa57ac084639.webp')",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: false,
    },
    {
      backgroundImage: "url('/8671a1abb8d0e729edaeef2a1075f9b4.webp')",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: true,
    },
    {
      backgroundImage: "url('/images (8).png')",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: false,
    },
    {
      backgroundImage: "url('/Rectangle 882.png')",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor",
      isPlaying: false,
    },
  ];

  return (
    <div className='video__galerie__grid-container'>
      {videos.map((video, index) => (
        <VideoItem
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
 * VideoItem Component
 * Represents a single video item with background image, details, and play/pause button.
 */
const VideoItem = ({ backgroundImage, title, description, isPlaying }) => {
  const buttonIcon = isPlaying ? <IoPauseOutline style={{ color: 'white', fontSize: '1.5rem' }} /> : <IoPlayOutline style={{ color: 'white', fontSize: '1.5rem' }} />;

  const videoItemStyle = {
    '--i': backgroundImage
  };

  return (
    <div className="video-item galerie__video-item" style={videoItemStyle}>
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