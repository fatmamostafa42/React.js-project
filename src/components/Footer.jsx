
import React from 'react';
import logoImage from '../images/logo 2.png'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <img
              src={logoImage}
              alt="Matoa Logo"
              width="178"
              height="22"
              className="d-inline-block align-top"
              style={{ marginBottom: '25px' }}
            />
            <p><span className="text-reset" style={{ fontSize: '20px' }}>Address</span></p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Store & Office</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Jl. Setrasari Kulon III, No. 10-12</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Sukarasa, Sukasari</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Bandung, Jawa Barat</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Indonesia 40152</p>
            <p><span className="text-reset" style={{ fontSize: '20px' }}>Office Hour</span></p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Monday - Sunday</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>10.00 - 18.00</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h2 className="fw-normal mb-4 title">
              Get in touch
              <span className="underline"> </span>
            </h2>
            <div className="contact-info">
              <p>
                <span className="text-reset" style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px' }}>Phone:</span>
                  <span style={{ fontSize: '16px', marginLeft: '50px' }}>022-20277564</span>
                </span>
              </p>
              <p>
                <span className="text-reset" style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px' }}>Service<br /> Center:</span>
                  <span style={{ fontSize: '16px', marginLeft: '45px' }}>0811-233-8899</span>
                </span>
              </p>
              <p>
                <span className="text-reset" style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px' }}>Customer <br />Service:</span>
                  <span style={{ fontSize: '16px', marginLeft: '30px' }}>0811-235-9988</span>
                </span>
              </p>
            </div>
            <div>
              <span className="me-4 text-reset">
                <FaFacebookF />
              </span>
              <span className="me-4 text-reset">
                <FaInstagram />
              </span>
              <span className="me-4 text-reset">
                <FaTwitter />
              </span>
              <span className="me-4 text-reset">
                <FaYoutube />
              </span>
            </div>
          </div>

          {/* Useful links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h2 className="fw-normal mb-4 title">
              Useful links
              <span className="underline"> </span>
            </h2>
            <p className="text-reset" style={{ fontSize: '16px' }}>Warranty & Complaints</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Order & Shipping</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Tracking Order</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>About Us</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Repair</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Terms</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>FAQ</p>
          </div>

          {/* Campaign */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h2 className="fw-normal mb-4 title">
              Campaign
              <span className="underline"> </span>
            </h2>
            <p className="text-reset" style={{ fontSize: '16px' }}>Mengenal Arti Cukup</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Tell Your Difference</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Waykambas</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Rebrand</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Gallery</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Singo</p>
            <p className="text-reset" style={{ fontSize: '16px' }}>Reparasi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}