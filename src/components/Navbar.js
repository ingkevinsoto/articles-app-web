import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from './ContactForm'; 
import '../styles.css'; 

const Navbar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false); 

  return (
    <nav className="navbar"> 
      <h1>Blog</h1>
      <div>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link> 
        <Link onClick={() => setShowModal(true)}>Contact</Link>
      </div>
      {showModal && <ContactForm closeModal={() => setShowModal(false)} />} 
    </nav>
  );
};

export default Navbar;
