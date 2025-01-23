import React from 'react';
import image38 from '../images/Rectangle 38.png';
import image39 from '../images/Rectangle 39 (1).png'; 
import image40 from '../images/Rectangle 40.png'; 
import image41 from '../images/Rectangle 41.png'; 
import image42 from '../images/Rectangle 42.png'; 


export default function InstagramGallery() {
  return (
    <div className="Instagram-container">
      <h2 className="Instagram-title"><span className="underlined">Instagr</span>am</h2>
      <div className="Instagram-images">
        <img className="Instagram-image" src={image38} alt="Watch Design 1" />
        <img className="Instagram-image" src={image39} alt="Watch Design 2" />
        <img className="Instagram-image" src={image40} alt="Watch Design 3" />
        <img className="Instagram-image" src={image41} alt="Watch Design 4" />
        <img className="Instagram-image" src={image42} alt="Watch Design 5" />
      </div>
    </div>
  );
}