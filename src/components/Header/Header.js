import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" className="logo-icon" />
        <div className="right-section">
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
