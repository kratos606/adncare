import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ReadySection from '../components/ReadySection/ReadySection'
import Footer from '../components/Footer/Footer'
import SwipeDown from '../components/SwipeDown/SwipeDown'
import { PiPlayBold } from "react-icons/pi";
import { IoPauseOutline } from "react-icons/io5";

const GridGallery = () => {
    return (
      <div className="galerie__grid-container">
        <div className="galerie__grid-item item1"><img src="/images (1).png" alt="Image 1" /></div>
        <div className="galerie__grid-item item2"><img src="/images (2).png" alt="Image 2" /></div>
        <div className="galerie__grid-item item3"><img src="/images (3).png" alt="Image 3" /></div>
        <div className="galerie__grid-item item4"><img src="/images (4).png" alt="Image 4" /></div>
        <div className="galerie__grid-item item5"><img src="/images (5).png" alt="Image 5" /></div>
        <div className="galerie__grid-item item6"><img src="/images (6).png" alt="Image 6" /></div>
      </div>
    );
};

const VideoGallery = () => {
    return (
        <div className='video__galerie__grid-container'>
            <div className="video-item galerie__video-item" style={{ '--i': `url('/Rectangle 881.png')` }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><PiPlayBold style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
                <div className="video-item galerie__video-item" style={{ '--i': `url('/Rectangle 882.png')` }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><IoPauseOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
                <div className="video-item galerie__video-item" style={{ '--i': `url('/Rectangle 883.png')` }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><PiPlayBold style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
                <div className="video-item galerie__video-item" style={{ '--i': `url('/Rectangle 883.png')` }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><PiPlayBold style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
        </div>
    )
}

const Galerie = () => {
  return (
    <>
        <section className='Galerie__hero-section'>
        <Navbar colored={true} />
        <SwipeDown />
        <div className="galerie__title__container">
            <div className="galerie__footer">
                <h1 className="galerie__title">Meet our beutiful team</h1>
            </div>
        </div>
        <div className='galerie__details'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
        <GridGallery />
        <div className="galerie__title__container">
            <div className="galerie__footer">
                <h1 className="galerie__title">Meet our beutiful team</h1>
            </div>
        </div>
        <div className='galerie__details'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
        </section>
        <section className='video-section'>
            <VideoGallery />
        </section>
        <ReadySection />
        <Footer />
    </>
  )
}

export default Galerie