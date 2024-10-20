import React, { useState } from 'react';
import { IoClose } from '@react-icons/all-files/io5/IoClose'
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";

import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dccd1cb8-9a98-429d-bbc9-8fff6b1da741");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your submission has been sent.");
      setShowModal(true)
      event.target.reset();
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          <div className="contact__overlay" onClick={closeModal}></div>
          <div className='contact__modal'>
            <button onClick={closeModal} className="modal__close-button"><IoClose style={{fontSize:'1.5rem'}} /></button>
            <div className='modal__content'>
              <IoMdCheckmarkCircleOutline style={{color:'forestgreen',fontSize:'10rem'}} />
              <h1>Thank you</h1>
              <p>{result}</p>
            </div>
          </div>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          className='contact-input'
          name="name"
          placeholder='Enter Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          id="phone"
          className='contact-input'
          name="phone"
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          className='contact-input'
          name="email"
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          name="message"
          className='contact__input-multiline'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className='send-button'>Envoyer</button>
        <input type="hidden" name="from_name" value="Adn Care" />
        <input type="hidden" name="subject" value="New Message from AdnCare Contact" />
      </form>
    </>
  );
};

export default ContactForm;