import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; 

const ContactForm = ({ closeModal }) => { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contacts', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      closeModal(); 
      alert('Contacto enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el contacto:', error);
    }
  };

  return (
    <div className="modal"> 
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span> 
        <h2>Contacto</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
