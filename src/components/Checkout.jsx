import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 

export default function Checkout() {
  let [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    shippingAddress: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    promoCode: ''
  });

  let [errors, setErrors] = useState({});
  let [showErrorMessage, setShowErrorMessage] = useState(false);
  let navigate = useNavigate();
  const { cart } = useCart(); 
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let validateForm = () => {
    let newErrors = {};
    if (!formData.fullname) newErrors.fullname = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.shippingAddress) newErrors.shippingAddress = 'Shipping address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.state) newErrors.state = 'State/Province is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowErrorMessage(false); 
      navigate('/payment', { state: { formData, cart } }); 
    } else {
      setShowErrorMessage(true);
    }
  };


  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-container" style={{ display: 'flex', padding: '20px' }}>
      <div className="order-details" style={{ width: '504px', height: '508px', backgroundColor: '#FFFFFF', padding: '20px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>Detail Order</h2>

        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <span>Shipping Cost:</span>
          <span>$0.00</span>
        </div>

        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <span>Packing:</span>
          <span>$0.00</span>
        </div>

        <hr />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '30px' }}>
          <span style={{ fontSize: '24px' }}>Grand Total:</span>
          <span style={{ fontSize: '36px' }}>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="checkout-form-container">
        <Form onSubmit={handleSubmit}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>Billing Address</h2>

          <Form.Group controlId="formFullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Fatma Mostafa Ali"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              isInvalid={!!errors.fullname}
            />
            <Form.Control.Feedback type="invalid">{errors.fullname}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ex: example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: 01004567897"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formShippingAddress">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Patriot Street"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              isInvalid={!!errors.shippingAddress}
            />
            <Form.Control.Feedback type="invalid">{errors.shippingAddress}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Egypt"
              name="country"
              value={formData.country}
              onChange={handleChange}
              isInvalid={!!errors.country}
            />
            <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formState">
            <Form.Label>State/Province</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cairo"
              name="state"
              value={formData.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cairo"
              name="city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: 02"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              isInvalid={!!errors.zipCode}
            />
            <Form.Control.Feedback type="invalid">{errors.zipCode}</Form.Control.Feedback>
          </Form.Group>

          {showErrorMessage && (
            <Alert variant="danger" style={{ marginTop: '20px' }}>
              Please correct the highlighted errors before proceeding.
            </Alert>
          )}

          <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
            <Button variant="outline-primary" type="button" style={{ width: '250px', height: '61px', fontSize: '20px', borderColor: '#D84727', color: '#D84727' }}>
              Continue Shopping
            </Button>
            <Button variant="primary" type="submit" style={{ width: '250px', height: '61px', fontSize: '20px', backgroundColor: '#D84727', borderColor: '#D84727' }}>
              Place My Order
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}