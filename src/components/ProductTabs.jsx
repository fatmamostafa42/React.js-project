import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function ProductTabs({ currentTab, onTabChange, productDetails }) {
  return (
    <div className="tabs-container">
      <Tabs activeKey={currentTab} onSelect={(k) => onTabChange(k)} className="mb-3">
        <Tab eventKey="detail" title="Detail">
          <div style={{ padding: '20px', minHeight: '200px' }}>
            {productDetails ? (
              <>
                <h2>{productDetails.title}</h2>
                <p>{productDetails.description}</p>
                <p>Price: ${productDetails.price}</p>
              </>
            ) : (
              <p>Loading product details...</p>
            )}
          </div>
        </Tab>
        <Tab eventKey="warranty" title="Warranty">
          <div style={{ padding: '20px', minHeight: '200px' }}>
          
          </div>
        </Tab>
        <Tab eventKey="custom-engrave" title="Custom Engrave">
          <div style={{ padding: '20px', minHeight: '200px' }}>
           
          </div>
        </Tab>
        <Tab eventKey="how-to-adjust" title="How to Adjust">
          <div style={{ padding: '20px', minHeight: '200px' }}>
           
          </div>
        </Tab>
        <Tab eventKey="gallery" title="Gallery">
          <div style={{ padding: '20px', minHeight: '200px' }}>
           
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}