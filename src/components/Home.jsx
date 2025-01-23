import React from 'react';
import Product from './Product';
import Eyewear from './Eyewear';
import Latestdeals from './Latestdeals';
import RecentNews from './RecentNews';
import ProductShowcase from './ProductShowcase';
import Testimonials from './Testimonials';
import InstagramGallry from './InstagramGallery';

export default function Home() {
  return (
    <div className="home-container">
      <Product />
      <Eyewear />
      <Latestdeals />
      <RecentNews />
      <ProductShowcase />
      <Testimonials />
      <InstagramGallry />
    </div>
  );
}