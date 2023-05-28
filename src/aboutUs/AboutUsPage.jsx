import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import logo from './Logo.jpeg';
import './AboutUs.css';

function AboutUsPage({ toggleNavbar }) {
  const navigate = useNavigate();

  

  const handleLogoClick = () => {
    toggleNavbar(true); 
    navigate('/');
  };

  return (
    <div className="about-us-page">
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <AboutUs />
    </div>
  );
}

export default AboutUsPage;
