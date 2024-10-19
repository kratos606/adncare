import React from 'react'
import Navbar from '../components/Navbar/mobile/Navbar'
import './css/galeriePhone.css'
import { IoPauseOutline } from '@react-icons/all-files/io5/IoPauseOutline'
import { IoPlayOutline } from '@react-icons/all-files/io5/IoPlayOutline'
import Footer from '../components/Footer/mobile/Footer'

const GaleriePhone = () => {
  return (
    <>
        <section className='apropos__phone'>
          <Navbar black={true} />
          <div className="swipe-down swipe-phone swipe-down-gold">
            <div className="swipe-down__gesture">
            <div className="swipe-down__icon"></div>
            </div>
            <p className="swipe-down__title">SWIPE DOWN</p>
          </div>
          <div style={{width:'100%'}}>
            <div className="title__container__phone">
                <div className="welcome__header__phone">
                <h1 className="welcome__title__phone">Meet our beutiful team</h1>
                <p className="welcome__details__phone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
          </div>
            <div className="galerie__grid-container">
                <div className="galerie__grid-item item1"><img src="/images (2).webp" alt="Image 1" /></div>
                <div className="galerie__grid-item item2"><img src="/Rectangle 887.png" alt="Image 2" /></div>
                <div className="galerie__grid-item item3"><img src="/Rectangle 882.png" alt="Image 3" /></div>
                <div className="galerie__grid-item item4"><img src="/Rectangle 883.png" alt="Image 4" /></div>
                <div className="galerie__grid-item item5"><img src="/ac3625ffa735356d712b632ed21ca280.webp" alt="Image 5" /></div>
                <div className="galerie__grid-item item6"><img src="/f47e0ef7ad313f9913fe551f8f018af4.webp" alt="Image 6" /></div>
            </div>
            <div style={{width:'100%'}}>
            <div className="title__container__phone">
                <div className="welcome__header__phone">
                <h1 className="welcome__title__phone">Meet our beutiful team</h1>
                <p className="welcome__details__phone">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
          </div>
          <div className='video__galerie__grid-container' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'2rem',marginBlock:'4rem'}}>
            <div className="video-item__phone" style={{ '--i': `url('/54446b38ffbae45bc8befa57ac084639.webp')`,transform:'none',width:'80%',height:'none',aspectRatio: '9 / 16' }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><IoPlayOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
                <div className="video-item__phone" style={{ '--i': `url('/8671a1abb8d0e729edaeef2a1075f9b4.webp')`,transform:'none',width:'80%',height:'none',aspectRatio: '9 / 16' }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><IoPauseOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
                <div className="video-item__phone" style={{ '--i': `url('/images (8).png')`,transform:'none',width:'80%',height:'none',aspectRatio: '9 / 16' }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><IoPlayOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
                <div className="video-item__phone" style={{ '--i': `url('/Rectangle 882.png')`,transform:'none',width:'80%',height:'none',aspectRatio: '9 / 16' }}>
                <div className="video__item-details">
                    <div className="player-ui">
                    <div className="video__item-title">Lorem ipsum</div>
                    <div className="video__item-description">Lorem ipsum dolor</div>
                    </div>
                    <button className="play-button"><IoPlayOutline style={{color:'white',fontSize:'1.5rem'}} /></button>
                </div>
                </div>
        </div>
        </section>
        <Footer showNavbar={false} />
    </>
  )
}

export default GaleriePhone