import React from 'react';
import './About.css';
import restaurantfood from "../../assets/restaurantfood.jpg";

const About = () => {
  return (
      <section className="about">
          <div className="container-about">
              <div className='photo-container'>
                  <img src={restaurantfood} className='about-photo' alt='Restaurant'/>
              </div>
              <div className="info-container">
                <h3 className="about-us">About company</h3>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to
                  pursue their shared dream of owning a restaurant.</p>
                <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does
                  all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to
                  incorporate additional cuisines from the Mediterranean region.</p>
              </div>
          </div>
      </section>
  );
};

export default About;