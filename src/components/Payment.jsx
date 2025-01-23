

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import image46 from '../images/image 46.png';
import image38 from '../images/image 38.png';
import image45 from '../images/image 45.png';
import image44 from '../images/image 44.png';
import image37 from '../images/image 37.png';
import image43 from '../images/image 43.png';
import image40 from '../images/image 40.png';
import image42 from '../images/image 42.png';
import image35 from '../images/image 35.png';
import image39 from '../images/image 39.png';


export function Payment() {
  let location = useLocation();
  let { formData, cart } = location.state || {};
  let navigate = useNavigate();

  const subtotal = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  // Function to handle payment submission
  const handlePayment = () => {
    // Redirect to the Confirmation component
    navigate('/confirmation', { state: { formData, cart, subtotal } });
  };

  return (
    <div>
      <div className="checkout-container" style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
        {/* Order Details Section */}
        <div className="order-details" style={{ width: '504px', backgroundColor: '#FFFFFF', padding: '20px', marginTop: '20px' }}>
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

        {/* Product Details Section */}
        <div className="product-details" style={{ width: '504px', backgroundColor: '#FFFFFF', padding: '20px', marginTop: '20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>Order Detail</h2>
          <p>Order Number:<span style={{ paddingLeft: '40px'}}>{'MTAWEB-3A86D4DB'}</span> </p>
          <p>Always remember Order Number for easy tracking</p>
          <p>Purchase Date:<span  style={{ paddingLeft: '40px'}}>{"2019-11-07 14:01:48"}</span> </p>
          <p>Fullname:<span style={{ paddingLeft: '70px'}}> {formData?.fullname}</span></p>
          <p>Email:<span style={{ paddingLeft: '100px'}} >{formData?.email}</span> </p>
          <p>Phone: <span style={{ paddingLeft: '100px'}}>{formData?.phone}</span></p>
          <p>Shipping Address: <span style={{ paddingLeft: '20px'}}>{formData?.shippingAddress}</span></p>
        </div>

       
      </div>
       {/* Payment Method Section */}
       <div className="payment-method-container" style={{ width: '1110px', height: '464px', backgroundColor: '#FFFFFF', padding: '20px',marginLeft:"400px", marginTop:"-300px" }}>
  <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'left' }}>Payment Method</h2>

  {/* First Row of Payment Options */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="bni" name="paymentMethod" value="bni" />
      <label htmlFor="bni" style={{ fontSize: '18px', marginTop: '10px', paddingLeft:'20px' }}>BNI Cicilan 0%</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image46} alt="BNI Logo" style={{ width: '100px', height: '100px' }} />
      </div>
    </div>

    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="mandiri" name="paymentMethod" value="mandiri" />
      <label htmlFor="mandiri" style={{ fontSize: '18px', marginTop: '10px', paddingLeft:'20px' }}>Mandiri Cicilan 0%</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image38} alt="Mandiri Logo" style={{ width: '100px', height: '100px' }} />
      </div>
    </div>

    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="bankTransfer" name="paymentMethod" value="bankTransfer" />
      <label htmlFor="bankTransfer" style={{ fontSize: '18px', marginTop: '10px',  paddingLeft:'20px' }}>Bank Transfer</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image45} alt="Bank Transfer Logo" style={{ width: '100px', height: '100px' }} />
      </div>
    </div>

    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" />
      <label htmlFor="creditCard" style={{ fontSize: '18px', marginTop: '10px',  paddingLeft:'20px' }}>Credit Card</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image44} alt="Credit Card Logo" style={{ width: '100px', height: '100px' }} />
        <img src={image37} alt="Credit Card Logo" style={{ width: '100px', height: '100px', marginTop: '5px' }} />
      </div>
    </div>
  </div>

  {/* Second Row of Payment Options */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" name="paymentMethod" value="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" />
      <label htmlFor="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" style={{ fontSize: '18px', marginTop: '10px', paddingLeft:'20px' }}>Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image43} alt="Credit Card Cicilan" style={{ width: '100px', height: '100px', }} />
        <img src={image40} alt="Credit Card Cicilan" style={{ width: '100px', height: '100px', marginTop: '5px', paddingLeft: '20px' }} />
        <img src={image42} alt="Credit Card Cicilan" style={{ width: '100px', height: '100px', marginTop: '5px', paddingLeft: '20px' }} />
      </div>
    </div>

    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="goPay" name="paymentMethod" value="goPay" />
      <label htmlFor="goPay" style={{ fontSize: '18px', marginTop: '10px',  paddingLeft:'20px' }}>GO-PAY</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image35} alt="GO-PAY Logo" style={{ width: '100px', height: '100px' }} />
      </div>
    </div>

    <div style={{ textAlign: 'left', marginRight: '20px' }}>
      <input type="radio" id="kredivo" name="paymentMethod" value="kredivo" />
      <label htmlFor="kredivo" style={{ fontSize: '18px', marginTop: '10px',  paddingLeft:'20px' }}>Kredivo</label>
      <div style={{ marginTop: '5px' }}>
        <img src={image39} alt="Kredivo Logo" style={{ width: '100px', height: '100px' }} />
      </div>
    </div>
  </div>

  {/* Proceed Payment Button */}
 
</div>
<button
    onClick={handlePayment}
    style={{
      display:'flex',
      marginLeft:'1220px',
      width: '250px',
      height :'61px',
      marginTop: '20px',
      marginBottom: '60px',
      padding: '15px',
      backgroundColor: '#D84727',
      color: '#FFFFFF',
      fontSize: '20px',
      fontWeight: 'bold',
      border: 'none',
      justifyContent:"center",
    
      cursor: 'pointer'
    }}
  >
    Proceed Payment
  </button>
    </div>
    
  );
}