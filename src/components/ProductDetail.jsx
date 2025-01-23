import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom'; 
import { Button } from 'react-bootstrap';
import Shape from '../images/Shape.png';
import logo from '../images/logo.png';
import { useCart } from './CartContext'; 

export default function ProductDetail({ setProduct }) {
  let { id } = useParams(); 
  let [product, setLocalProduct] = useState(null);
  let [quantity, setQuantity] = useState(1); 
  
  const { addToCart } = useCart(); 

  
  let productDetails = useCallback(async () => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await response.json();
    setLocalProduct(data);
    setProduct(data);
  }, [id, setProduct]); 

  useEffect(() => {
    productDetails();
  }, [productDetails]);

  let incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

 
  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); 
    setQuantity(1); 
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-images">
        <img src={product.image} alt={product.title} className="main-image" />
      </div>
      
      <div className="product-detail-info">
        <h1 className='UpperCase' style={{ fontSize: '60px', textAlign: 'left', color: '#333333' }}>
          {product.title}
        </h1>
        <p style={{ fontSize: '24px', textAlign: 'left', color: '#333333', margin: '20px 0' }}>
          Price: ${product.price}
        </p>
        <div className="button-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '20px', paddingTop: '50px', marginLeft:'100px' }}>
          <div className="quantity-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Button variant="outline-secondary" onClick={decrementQuantity} style={{ padding: '5px', width: '30px', height: '30px' }}>-</Button>
            <span>{quantity}</span>
            <Button variant="outline-secondary" onClick={incrementQuantity} style={{ padding: '5px', backgroundColor: '#D84727', border: 'none', color:'#FFFFFF', width: '30px', height: '30px' }}>+</Button>
          </div>

          <div className="product-detail-buttons" style={{ display: 'flex', gap: '10px' }}>
            <Button variant="primary" onClick={handleAddToCart} style={{ fontSize: '18px', backgroundColor: '#D84727', border: 'none', display: 'flex', justifyContent:'center', alignItems: 'center', width: '208px', height: '62px' }}>
              <img src={Shape} alt="Cart" style={{ width: '20px', marginRight: '10px' }} />
              Add to Cart
            </Button>

            <Button 
              variant="outline-secondary" 
              style={{ borderColor: '#D84727', color: '#D84727', backgroundColor: '#f5f5f5', width: '140px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={logo} 
                alt="Logo" 
                style={{ width: '40px', height: '30px', marginRight: '8px' }} 
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}