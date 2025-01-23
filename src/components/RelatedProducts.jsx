import React, { useEffect, useState, useCallback } from 'react';

export default function RelatedProducts({ excludeIds }) {
  let [relatedItems, setRelatedItems] = useState([]);

  const fetchRelatedItems = useCallback(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    
    const filteredItems = data.filter(item => !excludeIds.includes(item.id));

    
    const shuffledItems = filteredItems.sort(() => 0.5 - Math.random()); 
    return shuffledItems.slice(0, 4); 
  }, [excludeIds]);

  useEffect(() => {
    fetchRelatedItems().then(data => setRelatedItems(data));
  }, [fetchRelatedItems]);

  return (
    <div className="related-products-container">
    <h2><span className="related-title ">Relate</span> Products</h2>
      <div className="product-grid">
        {relatedItems.map(item => (
          <div className="product-card" key={item.id}>
            
              <img src={item.image} alt={item.title} className="product-image" />
              <h3 style={{ fontSize: '22px', color: '#333333' }}>{item.title}</h3>
         
            <p style={{ fontSize: '22px', color: '#333333' }} className="product-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}