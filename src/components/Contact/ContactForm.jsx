import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Form data submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
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
    </form>
  );
};

export default ContactForm;