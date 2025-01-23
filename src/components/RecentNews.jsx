import React from 'react';
import image from '../images/image 13.png';
import rectangle from '../images/Rectangle 21.png';

export default function RecentNews() {
  return (
    <div className="recent-news-container">
     <h2><span class="underlined">Recent</span> News</h2>
      <div className="recent-news-content">
        <div className="recent-news-item">
          <h6>Where To Travel</h6>
          <p>Matoa Where To <br></br>Travel? Yogyakarta</p>
          <button className="discover-button">Discover</button>
        </div>
        <div className="recent-news-image">
          <div className="image-wrapper">
            <img className="main-image" src={image} alt="Travel Destination" />
            <img className="rectangle-image" src={rectangle} alt="Rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
}