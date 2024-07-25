import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Banner.css'; // Import the CSS file

const Banner = () => {
  const location = useLocation();

  return (
    <div className="banner">
      <h1>Little Lemon Tree</h1>
      <h2>Chicago</h2>
      {location.pathname !== '/reservation' && (
        <Link to="/reservation">
          <button className="reservation-button">Reservation</button>
        </Link>
      )}
    </div>
  );
};

export default Banner;

