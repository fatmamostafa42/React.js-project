import React, { useEffect, useState } from "react";

export default function LatestDeals() {
  const [products, setProducts] = useState([]);

  const latestProducts = async () => {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    return data;
  };

  useEffect(() => {
    latestProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid-container">
      <h2><span className="latest">Latest</span> Deals</h2>
      <div className="product-grid">
        {products.slice(0, 4).map(product => (
          <div className="product-card" key={product.id}>
            <a href={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
            </a>
            <h3 style={{ fontSize: '24px', color: '#333333' }}>{product.title}</h3>
            <p style={{ fontSize: '24px', color: '#333333' }} className="product-price">${product.price}</p>
            <div className="product-buttons">
              <button className="heart-button">❤️</button>
              <button className="add-to-cart"><span>Add to Cart</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}