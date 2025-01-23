import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logoImage from '../images/image.png';
import cartIcon from '../images/cart.png';
import userIcon from '../images/user.png';
import searchIcon from '../images/search.png';
import Cart from './Cart';  // Importing Cart component

export default function NavbarComponent() {
  const [showCart, setShowCart] = useState(false); 

  const handleCartClick = () => {
    setShowCart(true); 
  };

  const handleCloseCart = () => {
    setShowCart(false); 
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home">
          <img src={logoImage} alt="Matoa Logo" width="178" height="22" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">  {/* Changed "mr" to "mr-auto" */}
            <Nav.Link href="/">Watches</Nav.Link>
            <Nav.Link href="/eyewear">Eyewear</Nav.Link>
            <Nav.Link href="/accessories">Accessories</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/search">
              <img src={searchIcon} alt="Search" width="24" height="24" />
            </Nav.Link>
            <Nav.Link href="/login">
              <img src={userIcon} alt="Login" width="24" height="24" />
              <span className="ml-1">Log In</span>
            </Nav.Link>
            <button 
              className="cart-icon nav-link" 
              onClick={handleCartClick} 
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <img src={cartIcon} alt="Cart" width="24" height="24" />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Cart show={showCart} handleClose={handleCloseCart} /> 
    </>
  );
}