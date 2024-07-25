import React from 'react';
import './Testimonials.css';
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";


const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3>Testimonials</h3>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src={photo1} alt="Andrea Smith" className="photo" />
          <p className="name">Andrea Smith</p>
          <p className="impressions">Very good restaurant! I want returned to this on next week.  The atmosphere was elegant yet comfortable, making it a great place for both special occasions and casual outings. We can't wait to come back!</p>
          <div className="rating">★★★★★</div>
        </div>
        <div className="testimonial">
          <img src={photo2} alt="Linneys Mars" className="photo" />
          <p className="name">Linneys Mars</p>
          <p className="impressions">
            Little lemon tree exceeded all our expectations. From the moment we walked in, we were greeted with a warm smile and seated promptly. The decor is modern and chic, creating a pleasant dining environment. The food was phenomenal – fresh ingredients, creative recipes, and beautifully executed dishes. The [special dish] was particularly memorable. Additionally, the drink selection was impressive and complemented the meal perfectly. Highly recommend this restaurant to anyone looking for a top-quality dining experience.
          </p>
          <div className="rating">★★★★★</div>
        </div>
        <div className="testimonial">
          <img src={photo3} alt="Apple Last" className="photo" />
          <p className="name">Apple Last</p>
          <p className="impressions">
            Our visit to Little lemon tree was exceptional from start to finish. The service was top-notch, with the waitstaff being both professional and personable. The menu offered a great variety of options, and everything we tried was cooked to perfection.
          </p>
          <div className="rating">★★★★☆</div>
        </div>
        <div className="testimonial">
          <img src={photo4} alt="Rutt Marks" className="photo" />
          <p className="name">Rutt Marks</p>
          <p className="impressions">
            I had a wonderful experience at Little lemon tree! The ambiance was warm and inviting, perfect for a cozy dinner. The staff were incredibly friendly and attentive, making sure we had everything we needed. The food was absolutely delicious – every dish was beautifully presented and full of flavor. I highly recommend the [signature dish], it was the highlight of the meal. Will definitely be returning soon!
          </p>
          <div className="rating">★★★★★</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
