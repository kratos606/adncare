import React from 'react';
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";

import './ContactCard.css'

const ContactCard = () => {
  return (
    <div className="container">
      <div className="item">
        <div className='contact__icon-container'><BiPhoneCall size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Appeler à tout moment</h4>
          <p className="textContent">06 67 78 36 03</p>
          <p className="textContent">06 67 78 36 03</p>
        </div>
      </div>

      <div className="item">
        <div className='contact__icon-container'><FaRegEnvelope size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Envoyer un e-mail</h4>
          <p className="textContent">contact@adncare.com</p>
          <p className="textContent">a.adda@adncare.com</p>
        </div>
      </div>

      <div className="item">
        <div className='contact__icon-container'><IoLocationOutline size={30} color="#FFFFFF" /></div>
        <div>
          <h4 className="textTitle">Visitez-nous</h4>
          <p className="textContent">
            Boulevard Mohammed Jelloul, Hay Essaada, N°20, Oujda
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;