
import React from 'react'; 
import Glasses from '../images/Glasses.png'; 
import Watches from '../images/Watches.png';

export default function Eyewear() {
  return (
    <div className="eyewear-showcase">
      <div className="product">
        <div className="product-content">
          <div className="product-info">
            <h3>
              <span style={{ fontWeight: 'normal' }}>Luxurious</span>{' '}
              <span style={{ fontWeight: 'bold' }}>Eyewear</span>
            </h3>
            <p>
              <span>See the beauty of the exotic world with the</span>
              <br />
              <span>luxurious glasses</span>
            </p>
            <a href="/" className="discover-link">Discover Now</a>
            <img
              src={Glasses}
              alt="Luxurious Eyewear"
              className="product-image1"
            />
          </div>
        </div>
      </div>

      <div className="product">
        <div className="product-content">
          <div className="product-info">
            <h3>
              <span style={{ fontWeight: 'normal' }}>Comfortable</span>{' '}
              <span style={{ fontWeight: 'bold' }}>Watches</span>
            </h3>
            <p>
              <span>Feel the balancing function and beauty in</span>
              <br />
              <span>our wooden watches</span>
            </p>
            <a href="/" className="discover-link">Discover Now</a>
          </div>
          <img
            src={Watches}
            alt="Comfortable Watches"
            className="product-image2"
          />
        </div>
      </div>
    </div>
  );
}