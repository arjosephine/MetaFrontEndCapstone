import React from 'react';
import { Link } from 'react-router-dom';
import restaurant from '../../assets/restaurant.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Імпортуємо React іконки
import './Contact.css';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebook /> },
  { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
];

const contacts = [
  { type: 'Email', value: 'contact@littlelemontree.com' },
  { type: 'Phone', value: '+123 456 7890' },
  { type: 'Address', value: '123 Lemon Street, Citrus City, FL' }
];

const navLinks = links.map(({ name, path }) => (
  <li key={path}>
    <Link to={path} className='nav-link'>
      {name}
    </Link>
  </li>
));

const contactLinks = contacts.map(({ type, value }) => (
  <li key={type}>
    <strong>{type}:</strong> {value}
  </li>
));

const socialLinks = socials.map(({ name, url, icon }) => (
  <li key={name}>
    <a href={url} target='_blank' rel='noopener noreferrer' className='social-link'>
      {icon}
    </a>
  </li>
));

const Contact = () => {
  return (
    <section className='contact-section'>
      <div className='contact-container'>
        <div className='photo-container'>
          <img src={restaurant} className='contact-photo' alt='Restaurant' />
        </div>
        <div className='contact-info'>
          <ul className='contact-details'>
            <p className='section-title'>Contact</p>
            {contactLinks}
          </ul>
          <ul className='social-links'>
            <p className='section-title'>Social Media</p>
            {socialLinks}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
