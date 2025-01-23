

import React from 'react';
import { useCart } from './CartContext'; 
import { Modal, Button } from 'react-bootstrap'; 
import TrashIcon from '../images/Shape.png'; 
import { useNavigate } from 'react-router-dom'; 

export default function Cart({ show, handleClose }) {
  const { cart, removeFromCart, updateCartQuantity } = useCart(); 
  const navigate = useNavigate(); 

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    handleClose(); 
    navigate('/checkout'); 
  };

  const handleQuantityChange = (itemId, change) => {
    updateCartQuantity(itemId, change);
  };

  if (cart.length === 0) {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <p>Your cart is empty.</p>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Modal show={show} onHide={handleClose} centered className="cart-modal">
      <Modal.Header closeButton />
      <Modal.Body>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image-wrapper">
              <img src={item.image} alt={item.title} className="cart-item-image" />
            </div>
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </div>
            <div className="cart-item-controls">
              <Button
                variant="outline-secondary"
                onClick={() => handleQuantityChange(item.id, -1)} // نقص 1 من الكمية
                disabled={item.quantity <= 1} // تعطيل الزر إذا كانت الكمية 1
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button
                variant="outline-secondary"
                onClick={() => handleQuantityChange(item.id, 1)} // زيادة 1 إلى الكمية
              >
                +
              </Button>
            </div>
            <div className="cart-item-total">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <Button
                variant="outline-danger"
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                <img src={TrashIcon} alt="Remove" className="trash-icon" />
              </Button>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <div className="promo-code">
            <label>Promo Code</label>
            <input type="text" />
          </div>
          <div className="total-price">
            <h4>Subtotal: ${subtotal.toFixed(2)}</h4> 
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="checkout-button" onClick={handleCheckout}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}