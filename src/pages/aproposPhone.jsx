import React from 'react'
import Navbar from '../components/Navbar/mobile/Navbar'
import Footer from '../components/Footer/mobile/Footer'
import './css/aproposPhone.css'
import Features from '../components/Features/Features'

const AproposPhone = () => {
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
                <h1 className="welcome__title__phone">À propos de nous</h1>
                </div>
            </div>
          </div>
        <img src='/bc8159e88e6f6e20702363edb7e8bbcf.png' />
          <div className="grid-item">
            <h1 className='grid__item-text header'>Adn Care</h1>
            <h2 className='grid__item-text sub-header'>Énergie vibrante, santé optimale.</h2>
            <p className='grid__item-text description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies.</p>
            <div className="grid__item-card">
              <div className="card-id"></div>
              <div className="card-info">
                <span>BY</span> Pt. <br />
                Adnane Adda
              </div>
            </div>
          </div>
          <div style={{width:'100%'}}>
            <div className="title__container__phone">
                <div className="welcome__header__phone">
                <h1 className="welcome__title__phone">Pourquoi Nous Choisir</h1>
                </div>
            </div>
          </div>
          <Features />
          <div className="why__us-menu__phone">
            <img src="/5e7996ff75142dfda98484a79ff366b8.webp" />
            <div>
              <div className="why__us__section__phone">
                <div className="why__us__section__title__phone">
                  We Proudly Give Quality Treatments 
                </div>
                <div className="why__us__section__details__phone">
                  <span className="why__us__section__text__phone">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, augue uttytu i imperdiet ultricies, leo mauris rhoncus uttytu.
                  </span>
                  <ul className="why__us__section__bullets__phone">
                    <li className="why__us__section__item__phone">
                      Advance Manual Therapy<br/>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.
                      </span>
                    </li>
                    <li className="why__us__section__item__phone">
                      Certified Personal Therapist<br/>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer showNavbar={false} />
    </>
  )
}

export default AproposPhone