import React from 'react';
import image from '../images/Mask Group (4).png';
import rectangle from '../images/Rectangle 21.png';
import right from '../images/right.png';
import left from '../images/left.png';

export default function Testimonials() {
  return (
    <div className="Testimonials-container">
      <h2><span className="underlined">Testim</span>onials</h2>
      <div className="Testimonials-content">
        <div className="Testimonials-image">
          <div className="image-wrapper">
            <img className="main-image" src={image} alt="Travel Destination" />
            <img className="rectangle-image" src={rectangle} alt="Rectangle" />
            <div className="arrow-container">
              <img className="arrow" src={left} alt="Left Arrow" />
              <img className="arrow" src={right} alt="Right Arrow" />
            </div>
          </div>
        </div>
        <div className="Testimonials-item">
          <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
          <h5>Gita Savitri</h5>
          <h6>Content Creator/Influencer</h6>
        </div>
      </div>
    </div>
  );
}