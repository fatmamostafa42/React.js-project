import React from 'react';
import { useLocation } from 'react-router-dom';

export function Confirmation() {
  let location = useLocation();
  const { formData, subtotal } = location.state || {};
  
  // حساب البيانات المطلوبة
  const shippingCost = 0.0;
  const packingCost = 0.0;
  const grandTotal = subtotal + shippingCost + packingCost;

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px', marginRight:"400px" }}>
      <div style={{ width: '504px', backgroundColor: '#FFFFFF', padding: '20px', marginTop: '20px' }}>
       

        {/* Subtotal */}
        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping Cost */}
        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span>Shipping Cost:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>

        {/* Packing */}
        <div style={{ fontSize: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span>Packing:</span>
          <span>${packingCost.toFixed(2)}</span>
        </div>

        {/* Divider */}
        <hr style={{ margin: '20px 0' }} />

        {/* Grand Total */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <span style={{ fontSize: '24px' }}>Grand Total:</span>
          <span style={{ fontSize: '36px' }}>${grandTotal.toFixed(2)}</span>
        </div>

        {/* Divider */}
        <hr style={{ margin: '20px 0' }} />

        {/* Shipping Address */}
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Shipping Address</h2>
        <p>{formData?.shippingAddress}</p>
      </div>
    </div>
  );
}