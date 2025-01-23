

import React, { useState } from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import Shape from '../images/Shape.png';
import image from '../images/image 6.png'; 
import wear from '../images/image2.jpg'; 
import logo from '../images/logo.png';

export default function Product() {
  let [activeIndex, setActiveIndex] = useState(0); 
  let handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex); 
  };

  let goToPrev = () => {
    let newIndex = activeIndex === 0 ? 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  let goToNext = () => {
    let newIndex = activeIndex === 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <Container  className="product-carousel-container">
      <div style={{ position: 'relative' }}>
        <Carousel
          activeIndex={activeIndex} 
          onSelect={handleSelect} 
          indicators={false}
          controls={false} 
        >
        
          <Carousel.Item>
            <Card style={{ width: '1110px', height: '505px', padding: '20px', backgroundColor: '#F1DDC9', position: 'relative', overflow: 'visible', zIndex: 1 }}>
              <Row>
               
                <Col md={4} style={{ position: 'relative', left: '-30px', bottom: '60px', zIndex: 2 }}>
                  <img
                    src={image} 
                    alt="WAY KAMBAS MINI EBONY" 
                    style={{
                      width: '325px',
                      height: '467px',
                      objectFit: 'contain',
                      background: 'none',
                      boxShadow: 'none',
                      position: 'absolute',
                      top: '100px',
                      left:'30px',
                      zIndex: 3,
                    }}
                  />
                </Col>

               
                <Col md={8} style={{ position: 'relative', zIndex: 2 }}>
    <Card.Body>
     <Card.Title style={{ fontSize: '60px', fontWeight: 'bold', color: '#333333' , paddingTop:'20px',}}>
        <span>WAY KAMBAS</span><br />
        <span>MINI EBONY</span>
        <div style={{ borderBottom: '1px solid #000000', margin: '10px 0' ,width:'95px'}}></div>
    </Card.Title>
    <Card.Text style={{ fontSize: '16px', color: '#333333' , paddingTop:'10px' }}>
        MATOA Way Kambas - This wood is chosen to represent the <br />
        Sumatran Rhino's skin which is designed with an overlap effect on its <br />
        strap to represent Rhino's skin.
    </Card.Text>
    <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '16px', color: '#333333', fontWeight: 'bold' }}>Discover</span>
        <div style={{ borderBottom: '1px solid #000000', margin: '5px 0', width:'74px' }}></div>
    </div>

                  
                    <div style={{ paddingTop:'30px',display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Button variant="primary" style={{ font:'20px', backgroundColor: '#D84727', border: 'none', display: 'flex', alignItems: 'center',  width:'208px', height:'62px' }}>
                        <img src={Shape} alt="Cart" style={{ width: '20px', marginRight: '20px', marginLeft:'20px', }} />
                        Add to Cart
                      </Button>

    <Button 
    variant="outline-secondary" 
    style={{ borderColor: '#D84727', color: '#D84727', backgroundColor: '#f5f5f5', width: '140px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img 
        src={logo} 
        alt="Logo" 
        style={{ width: '57px', height: '33px', marginRight: '8px' }} 
    />
   
</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Carousel.Item>

         
          <Carousel.Item>
            <Card style={{ width: '1110px', height: '505px', padding: '20px', backgroundColor: '#F1DDC9', position: 'relative', overflow: 'visible' }}>
              <Row>
               
                <Col md={4} style={{ position: 'relative', left: '-30px', top: '-100px', zIndex: 1 }}>
                  <img
                    src={wear} 
                    alt="Formal Wear" 
                    style={{
                      width: '325px',
                      height: '467px',
                      objectFit: 'contain',
                      background: 'none',
                      boxShadow: 'none',
                      position: 'absolute',
                      top: '100px',
                       left:'30px',
                      zIndex: 2,
                    }}
                  />
                </Col>

               
                <Col md={8} style={{ position: 'relative', zIndex: 2 }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '60px', fontWeight: 'bold', color: '#333333',paddingTop:'20px', }}>
                      Men's Wear
                      <div style={{ borderBottom: '1px solid #000000', margin: '10px 0' ,width:'95px'}}></div>
                    </Card.Title>
                    <Card.Text style={{ fontSize: '16px', color: '#333333', paddingTop:'10px' }}>
                      Comfortable and stylish Formal wear for everyday use, made from soft, high-quality materials.
                    </Card.Text>

                   
                    <div style={{ paddingTop:'30px',display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Button variant="primary" style={{ font:'20px', backgroundColor: '#D84727', border: 'none', display: 'flex', alignItems: 'center',width:'208px', height:'62px' }}>
                        <img src={Shape} alt="Cart" style={{ width: '20px', marginRight: '20px', marginLeft:'20px',}} />
                        Add to Cart
                      </Button>

                      <Button 
    variant="outline-secondary" 
    style={{ borderColor: '#D84727', color: '#D84727', backgroundColor: '#f5f5f5', width: '140px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img 
        src={logo} 
        alt="Logo" 
        style={{ width: '57px', height: '33px', marginRight: '8px' }} 
    />
   
</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Carousel.Item>
        </Carousel>

       
<div style={{
  position: 'absolute',
  bottom: '-10px',
  right: '230px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  zIndex: 3,
 
}}>
  <button
    type="button"
    style={{
      width: '32px',
      height: '32px',
      backgroundColor: 'none',
      border: '2px solid #D84727',
      color: '#D84727',
      borderRadius: '4px',
      textAlign: 'center',
      lineHeight: '32px', 
      cursor: 'pointer'
    }}
    onClick={goToPrev}
  >
    {'<'}
  </button>
  <button
    type="button"
    style={{
      width: '32px',
      height: '32px',
      backgroundColor: '#D84727',
      border: 'none',
      color: '#fff',
      textAlign: 'center',
      lineHeight: '32px', 
      cursor: 'pointer',
    }}
    
    onClick={goToNext}
  >
    {'>'}
  </button>
</div>
      </div>
    </Container>
  );
}