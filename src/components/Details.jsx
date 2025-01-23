import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import ProductTabs from './ProductTabs'; 
import RelatedProducts from './RelatedProducts'; 

export default function DetailsPage() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('detail'); 
  const [currentProduct, setCurrentProduct] = useState(null); 
  const handleAddToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
      updatedCart[existingProductIndex].quantity += quantity; 
    } else {
      updatedCart.push({ ...product, quantity }); 
    }

    setCart(updatedCart); 
  };

  return (
    <div className="details-container">
      <ProductDetail onAddToCart={handleAddToCart} setProduct={setCurrentProduct} /> 
      <ProductTabs currentTab={activeTab} onTabChange={setActiveTab} productDetails={currentProduct} /> 
      <RelatedProducts excludeIds={[currentProduct?.id]} /> 
    </div>
  );
}