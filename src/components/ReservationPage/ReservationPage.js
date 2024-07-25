import React, { useState } from 'react';
import './ReservationPage.css'; // Import the CSS file

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    date: '',
    time: '',
    people: '',
    preferense: '',
    requests: '',
    phone: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to an API)
    setMessage('Reservation successful! Thank you for booking with us.');
    // Reset form data if needed
    setFormData({
      firstname: '',
      lastname: '',
      date: '',
      time: '',
      people: '',
      preferense: '',
      requests: '',
      phone: '',
      email: '',
    });
  };

  return (
    <div className="container-reservation">
      <h1 className="reservation-title">Reservation</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname">First name:</label>
            <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last name:</label>
            <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="people">Number of People:</label>
            <input
                type="number"
                id="people"
                name="people"
                value={formData.people}
                onChange={handleChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferense">Preferense:</label>
            <input
              type="text"
              id="preferense"
              name="preferense"
              value={formData.preferense}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="requests">Special Requests:</label>
          <textarea
            id="requests"
            name="requests"
            value={formData.requests}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="reservation-button" type="submit">Submit</button>
      </form>
      {message && <p className='reservation-massage'>{message}</p>}
    </div>
  );
};

export default ReservationPage;
