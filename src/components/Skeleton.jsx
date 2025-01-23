import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from './Navbar';
import LogoFooter from './LogoFooter';
import Footer from './Footer';

export default function Skeleton() {
  return (
    <>
      <NavbarComponent />
      <Outlet /> 
      <LogoFooter />
      <Footer />
    </>
  );
}