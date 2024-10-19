import React, { useState } from 'react'
import './Footer.css'
import { IoMenu } from '@react-icons/all-files/io5/IoMenu'
import { IoClose } from '@react-icons/all-files/io5/IoClose'
import ContactForm from '../../Contact/ContactForm'
import Navbar from '../../Navbar/mobile/Navbar'

const Footer = (props) => {
  return (
    <section className="footer-section__phone">
        {
          props.showNavbar ? (
          <Navbar />
          ) : null
        }
        <div className="contact-form__container">
          <h1 className='contact-form__phone__header'>
            Parlez-nous de vous
          </h1>
          <div className="contact-form__phone">
            <ContactForm />
          </div>
        </div>
    </section>
  )
}

export default Footer