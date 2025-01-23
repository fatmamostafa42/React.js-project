import React from 'react';
import image25 from '../images/image 25.png';
import image26 from '../images/image 26.png'; 
import image27 from '../images/image 27.png';
import image28 from '../images/image 28.png'; 
import image29 from '../images/image 29.png'; 
import image32 from '../images/image 32.png'; 
import image33 from '../images/image 33.png'; 
import image34 from '../images/image 34.png'; 
import image35 from '../images/image 35.png'; 
import image36 from '../images/image 36.png'; 

export default function LogoFooter() {
  return (
    <div className="footer-container">
      <div className="logo-grid">
        <img src={image25} alt="BNI Logo" />
        <img src={image26} alt="Permata Logo" />
        <img src={image27} alt="Mastercard Logo" />
        <img src={image28} alt="Danamon Logo" />
        <img src={image29} alt="Visa Logo" />
        <img src={image32} alt="Mandiri Logo" />
        <img src={image33} alt="Kredivo Logo" />
        <img src={image34} alt="UOB Logo" />
        <img src={image35} alt="GoPay Logo" />
        <img src={image36} alt="Standard Chartered Logo" />
      </div>
    </div>
  );
};